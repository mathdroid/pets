import styles from "./PetDetail.module.css";
import { Tag } from "../common/Tag";
import typography from "../common/typography.module.css";
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

      <div className={styles.content}>
        <header className={styles.header}>
          <span
            className={typography.smallCaps}
          >{`${pet.size} • ${pet.age} • ${pet.gender}`}</span>
          <Tag>{pet.status}</Tag>
        </header>
        <h2 className={`${typography.title} ${styles.title}`}>{pet.name}</h2>
        <span className={typography.subtitle}>{`${pet.breeds.primary}${
          pet.breeds.secondary ? ` - ${pet.breeds.secondary}` : ""
        }`}</span>
        <p className={`${typography.description} ${styles.description}`}>
          {pet.description} <a href={pet.url}>(read more)</a>
        </p>
      </div>
    </article>
  );
}
