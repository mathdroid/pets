import styles from "./PetDetail.module.css";
import { Pet } from "../../types/pet";

interface Props {
  pet: Pet;
}

export function PetDetail({ pet }: Props) {
  return (
    <article className={styles.card}>
      <div className={styles.wideBox}>
        <img
          src={pet?.photos[0]?.full ?? `http://via.placeholder.com/680x400`}
        />
      </div>

      <div className={styles.description}>
        <span className={styles.status}>{pet.status}</span>
        <span
          className={styles.tags}
        >{`${pet.size} • ${pet.age} • ${pet.gender}`}</span>
        <h2>{pet.name}</h2>
        <span className={styles.breed}>{`${pet.breeds.primary}${
          pet.breeds.secondary ? ` - ${pet.breeds.secondary}` : ""
        }`}</span>
        <p className={styles.story}>
          {pet.description} <a href={pet.url}>(read more)</a>
        </p>
      </div>
    </article>
  );
}
