import styles from "./Tag.module.css";

export const Tag = ({ children }) => {
  return (
    <div className={styles.tag}>
      <span>{children}</span>
      <button>
        <svg viewBox="0 0 16 16" focusable="false" role="presentation">
          <path
            d="M9.41 8l2.29-2.29c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71L8 6.59l-2.29-2.3a1.003 1.003 0 0 0-1.42 1.42L6.59 8 4.3 10.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71L8 9.41l2.29 2.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71L9.41 8z"
            fill-rule="evenodd"
            fill="currentColor"
          ></path>
        </svg>
      </button>
    </div>
  );
};
