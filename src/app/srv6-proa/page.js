import Srv6ProaContent from "@/components/Srv6ProaContent";

export const metadata = {
  title: "SRv6 PROA Dashboard - Yu-Chen(Cindy), Liu",
  description: "Interactive simulation of PROA, an adaptive path selection method for SDN-enabled SRv6, compared with Dijkstra, OSPFv3 and random routing during link failure.",
};

export default function Srv6ProaPage() {
  return <Srv6ProaContent />;
}
