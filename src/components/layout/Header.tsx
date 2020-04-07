import styles from "./Header.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export function Header() {
  const router = useRouter();
  const isHome = router.pathname === "/";
  return (
    <header className={styles.header}>
      <Link href="/" passHref>
        <a>
          <h1>PETS!</h1>
          {!isHome && <span>🐕 Back to home</span>}
        </a>
      </Link>
    </header>
  );
}
