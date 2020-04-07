import styles from "./PetListing.module.css";
import { Pet } from "../../types/pet";

interface Props {
  pet: Pet;
}

export function PetListing({ pet }: Props) {
  return (
    <div className={styles.card}>
      <img
        src={pet?.photos[0]?.small ?? `http://via.placeholder.com/100x100`}
      ></img>
      <div className={styles.description}>
        <h2>{pet.name}</h2>
        <span>{`${pet.breeds.primary}${
          pet.breeds.secondary ? ` - ${pet.breeds.secondary}` : ""
        }`}</span>
      </div>
    </div>
  );
}
