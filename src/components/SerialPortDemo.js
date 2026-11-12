"use client";

import { useEffect, useState } from "react";
import styles from "./SerialPortDemo.module.css";

const phases = ["Opening serial ports", "Configuring UART", "Transmitting test payload", "Verifying received data", "Exporting test report"];
const modules = [
  ["Serial Port Control", "Opens the port and applies baud rate, framing, and flow control through pyserial."],
  ["Data Transfer", "Sends the test payload, receives data, and measures transmission throughput."],
  ["External Command", "Invokes platform utilities such as mx-uart-ctl through subprocess."],
];

const makeCommand = (mode, baud) => `serial-test --mode ${mode.toLowerCase()} --baud ${baud}`;

function CommandConsole({ mode, baud, running, onRun, onReset }) {
  const [command, setCommand] = useState(() => makeCommand(mode, baud));
  const [message, setMessage] = useState("");
  const [lastCommand, setLastCommand] = useState("");

  function submit(event) {
    event.preventDefault();
    if (running) return;
    const text = command.trim();
    if (text === "help" || text === "serial-test --help") {
      setMessage("Usage: serial-test --mode <rs232|rs485-2w|rs422/rs485-4w> --baud <9600|115200|921600>\nCommands: help · clear\nTip: use ↑ to recall your last test command.");
      return;
    }
    if (text === "clear") {
      setMessage("");
      onReset();
      setCommand("");
      return;
    }
    const tokens = text.split(/\s+/);
    if (tokens[0] !== "serial-test" || tokens.length !== 5) {
      setMessage("Command not recognized. Type help for supported demo commands.");
      return;
    }
    const options = {};
    for (let i = 1; i < tokens.length; i += 2) options[tokens[i]] = tokens[i + 1];
    const nextMode = ["RS232", "RS485-2W", "RS422/RS485-4W"].find(value => value.toLowerCase() === options["--mode"]?.toLowerCase());
    if (!nextMode || !["9600", "115200", "921600"].includes(options["--baud"])) {
      setMessage("Invalid mode or baud rate. Type help to see supported values.");
      return;
    }
    setMessage("");
    setLastCommand(text);
    onRun(nextMode, options["--baud"]);
  }

  return <div className={styles.cli}>
    <div className={styles.engineer}><span>QA ENGINEER WORKSPACE</span><span>qa@debian:~/serial-lab</span></div>
    <p className={styles.cliHint}>Edit the command, then press Enter or Execute. Try <code>help</code> for options.</p>
    <form onSubmit={submit} className={styles.commandForm}>
      <span aria-hidden="true">$</span>
      <label className="sr-only" htmlFor="serial-command">Serial test command</label>
      <input id="serial-command" value={command} maxLength={160} disabled={running} spellCheck={false} autoComplete="off" autoCapitalize="none" autoCorrect="off" enterKeyHint="go" onChange={event => setCommand(event.target.value)} onKeyDown={event => {
        if (event.key === "ArrowUp" && lastCommand) { event.preventDefault(); setCommand(lastCommand); }
      }} />
      <button disabled={running || !command.trim()} type="submit">{running ? "Running…" : "Execute ↵"}</button>
    </form>
    <div className={styles.cliShortcuts}>
      <button disabled={running} onClick={() => { setCommand(makeCommand(mode, baud)); setMessage(""); }}>Insert test command</button>
      <button disabled={running} onClick={() => setCommand("help")}>help</button>
      <button disabled={running} onClick={() => { onReset(); setMessage(""); setCommand(""); }}>Clear terminal</button>
    </div>
    {message && <pre className={styles.cliMessage} role="status">{message}</pre>}
  </div>;
}

function Device({ receiver, running }) {
  return <div className={styles.deviceWrap}>
    <div className={styles.device}>
      <div className={styles.deviceTop}><span>INDUSTRIAL PC</span><span>{receiver ? "ARM" : "x86"}</span></div>
      <div className={styles.deviceFace}>
        <div className={styles.vents}>{Array.from({ length: 7 }, (_, i) => <i key={i} />)}</div>
        <div className={styles.devicePorts}><div className={styles.port}>{Array.from({ length: 9 }, (_, i) => <i key={i} />)}</div><span className={`${styles.led} ${running ? styles.blink : ""}`} /><span className={styles.portLabel}>{receiver ? "RX" : "TX"}</span></div>
      </div>
    </div>
    <div className={styles.deviceLabel}>{receiver ? "Receiver" : "Sender"}<span>{receiver ? "ARM · Debian 11" : "x86 · Debian 11"}</span></div>
  </div>;
}

export default function SerialPortDemo() {
  const [mode, setMode] = useState("RS232");
  const [baud, setBaud] = useState("115200");
  const [step, setStep] = useState(-1);
  const [activeModule, setActiveModule] = useState(0);
  const [consoleVersion, setConsoleVersion] = useState(0);
  const running = step >= 0 && step < phases.length;
  const complete = step === phases.length;

  useEffect(() => {
    if (!running) return;
    const timer = setTimeout(() => setStep(value => value + 1), 1100);
    return () => clearTimeout(timer);
  }, [step, running]);

  return <section id="interactive-demo" className={`${styles.section} mb-16 scroll-mt-24`}>
    <div className={styles.intro}><div><p className={styles.eyebrow}>FROM COMMAND TO CONNECTION</p><h2>Inside the serial test bench</h2></div><span className={styles.demoBadge}>Interactive simulation</span></div>
    <p className={styles.description}>Configure a connection and watch the test move from port setup to a finished report.</p>
    <div className={styles.bench}>
      <div className={styles.benchHeader}><span><i /> SERIAL LAB / 01</span><span>{running ? "TEST IN PROGRESS" : complete ? "TEST COMPLETE" : "READY TO CONNECT"}</span></div>
      <div className={`${styles.scene} ${running ? styles.transmitting : ""}`}>
        <div className={styles.grid} />
        <Device running={running} />
        <div className={styles.connection}><span className={styles.connectionLabel}>{mode}<small>{baud} baud</small></span><div className={styles.wire}><i /><i /><i /></div><span className={styles.flowLabel}>{running ? "PAYLOAD IN TRANSIT →" : complete ? "TRANSFER VERIFIED ✓" : "SERIAL DATA LINK"}</span></div>
        <Device receiver running={running} />
      </div>
      <div className={styles.controls}>
        <label>Interface<select value={mode} disabled={running} onChange={e => { setMode(e.target.value); setStep(-1); setConsoleVersion(value => value + 1); }}><option>RS232</option><option>RS485-2W</option><option>RS422/RS485-4W</option></select></label>
        <label>Baud rate<select value={baud} disabled={running} onChange={e => { setBaud(e.target.value); setStep(-1); setConsoleVersion(value => value + 1); }}><option>9600</option><option>115200</option><option>921600</option></select></label>
        <button disabled={running} onClick={() => setStep(0)}>{running ? "Testing…" : complete ? "↻ Run again" : "▶ Run test"}</button>
        <button className={styles.reset} disabled={step === -1} onClick={() => setStep(-1)}>Reset</button>
      </div>
      <div className={styles.terminal}>
        <div className={styles.terminalTitle}><span>● ● ●</span> test-session <span>SIMULATED</span></div>
        <CommandConsole key={consoleVersion} mode={mode} baud={baud} running={running} onReset={() => setStep(-1)} onRun={(nextMode, nextBaud) => { setMode(nextMode); setBaud(nextBaud); setStep(0); }} />
        {step >= 0 && <p className={styles.command}>$ {makeCommand(mode, baud)}</p>}
        <div className={styles.logs}>{step === -1 ? <p className={styles.idle}>Waiting for a test. Choose your settings, then run.</p> : phases.slice(0, Math.min(step + 1, phases.length)).map((phase, i) => <p key={phase}><span>{i < step ? "[ OK ]" : "[ .. ]"}</span> {phase}{i === 1 ? ` · ${baud} baud` : ""}</p>)}</div>
        <div className={styles.progress} role="progressbar" aria-label="Simulated test progress" aria-valuenow={Math.max(0, Math.round(step / phases.length * 100))} aria-valuemin={0} aria-valuemax={100}><i style={{ width: `${Math.max(0, step / phases.length * 100)}%` }} /></div>
        <p className={styles.status} role="status">{complete ? "✓ Demo complete · payload verified · report exported" : running ? `${phases[step]}…` : "No hardware connected · illustrative workflow"}</p>
      </div>
    </div>
    <div className={styles.moduleHeading}>EXPLORE THE SOFTWARE MODULES <span>Tap to inspect ↓</span></div>
    <div className={styles.modules}>{modules.map(([name], i) => <button key={name} aria-pressed={activeModule === i} onClick={() => setActiveModule(i)} className={activeModule === i ? styles.selected : ""}><span>0{i + 1}</span>{name}<span>↗</span></button>)}</div>
    <p className={styles.moduleDescription}>{modules[activeModule][1]}</p>
    <p className={styles.note}>Conceptual visualization of the project workflow. Devices, command syntax, timing, and results are illustrative; this demo does not access hardware or reproduce measured benchmarks.</p>
  </section>;
}
