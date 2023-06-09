import styles from "./Header.module.css";
import Link from "next/link";

export function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <p className={styles.anchor}>Index</p>
      </Link>
      <Link href="/about">
      <p className={styles.anchor}>About</p>
      </Link>
    </header>
  );
}
