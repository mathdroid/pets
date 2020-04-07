import styles from "./Header.module.css";
import Link from "next/link";

export function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" passHref>
        <a>
          <h1>PETS!</h1>
        </a>
      </Link>
    </header>
  );
}
