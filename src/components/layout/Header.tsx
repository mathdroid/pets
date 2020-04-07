import styles from "./Header.module.css";
import Link from "next/link";

export function Header() {
  return (
    <header className={styles.error}>
      <Link href="/">PETS!</Link>
    </header>
  );
}
