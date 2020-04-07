import styles from "./Stack.module.css";

export function Stack({ children }) {
  return <ul className={styles.stack}>{children}</ul>;
}
