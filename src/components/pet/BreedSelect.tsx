import styles from "./BreedSelect.module.css";
import { Stack } from "../common/Stack";

const BreedChecklist = ({ toggleBreed, breed, isActive }) => (
  <button
    onClick={() => {
      toggleBreed(breed.name);
    }}
  >
    {isActive ? `☑️` : `☐`} {breed.name}
  </button>
);

export const BreedSelect = ({ breeds, toggleBreed, selectedBreeds }) => {
  return (
    <>
      <h2>Breed filter</h2>
      <Stack className={styles.short}>
        {breeds.map((breed) => (
          <BreedChecklist
            toggleBreed={toggleBreed}
            breed={breed}
            isActive={selectedBreeds.includes(breed.name)}
          />
        ))}
      </Stack>
    </>
  );
};
