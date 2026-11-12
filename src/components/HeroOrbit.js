"use client";

import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";
import styles from "./HeroOrbit.module.css";

export default function HeroOrbit() {
  return <div className={styles.scene}>
    <div className={styles.backdrop} aria-hidden="true" />
    <ExportedImage src="/images/cindy-pointing-v1.webp" alt="Cindy pointing to the Explore my work link" width={675} height={900} unoptimized priority className={styles.portrait} />
    <Link href="/portfolio" className={styles.workLink}>Explore my work <span aria-hidden="true">↗</span></Link>
    <span className={styles.caption}>A curious mind, a practical builder.</span>
  </div>;
}
