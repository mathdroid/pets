import styles from "./Stack.module.css";

export function Stack({ children, ...props }) {
  return (
    <ul {...props} className={`${props.className} ${styles.stack}`}>
      {children}
    </ul>
  );
}
