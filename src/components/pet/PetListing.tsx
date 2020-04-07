import styles from "./PetListing.module.css";
import { Pet } from "../../types/pet";

interface Props {
  pet: Pet;
}

export function PetListing({ pet }: Props) {
  return <h1>{pet.name}</h1>;
}
