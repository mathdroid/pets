import styles from "./Tag.module.css";

export const Tag = ({ children }) => {
  return <span className={styles.tag}>{children}</span>;
};
