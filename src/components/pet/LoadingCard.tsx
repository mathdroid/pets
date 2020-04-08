import styles from "./PetListing.module.css";
import outerStyles from "./PetList.module.css";
import { Stack } from "../common/Stack";

export function LoadingCard() {
  return (
    <Stack className={outerStyles.stack}>
      <div className={styles.card}>
        <img src={`http://via.placeholder.com/100x100`}></img>
        <div className={styles.description}>
          <h2> </h2>
          <span> </span>
        </div>
      </div>
    </Stack>
  );
}
