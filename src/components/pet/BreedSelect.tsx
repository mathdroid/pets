import { Stack } from "../common/Stack";

const BreedChecklist = ({ toggleBreed, breed, isActive }) => (
  <p
    onClick={() => {
      toggleBreed(breed.name);
    }}
  >
    {isActive ? `☑️` : `☐`} {breed.name}
  </p>
);

export const BreedSelect = ({ breeds, toggleBreed, selectedBreeds }) => {
  return (
    <Stack>
      {breeds.map((breed) => (
        <BreedChecklist
          toggleBreed={toggleBreed}
          breed={breed}
          isActive={selectedBreeds.includes(breed.name)}
        />
      ))}
    </Stack>
  );
};
