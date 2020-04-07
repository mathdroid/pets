import { useState, useEffect } from "react";
import useSWR from "swr";
import qs from "qs";

import { Pet } from "../types/pet";
import { getAnimals, getBreeds } from "../util/api";
import { Layout } from "../components/layout/Layout";
import { PetList } from "../components/pet/PetList";
import { Breed } from "../types/breed";
import { fetch } from "../util/fetcher";
import { BreedSelect } from "../components/pet/BreedSelect";

interface IndexProps {
  initialPets: Pet[];
  breeds: Breed[];
}

const fetchByBreed = async (breed: string): Promise<Pet[]> => {
  const response = await fetch(
    `/api/getByBreed?${qs.stringify({ type: "dog", breed })}`
  );
  return response.json();
};

const IndexPage = ({ initialPets, breeds }: IndexProps) => {
  const [selectedBreeds, setSelectedBreeds] = useState<string[]>([]);
  const [pets, setPets] = useState<Pet[]>(initialPets);
  const { data, error } = useSWR(`${selectedBreeds.join(",")}`, fetchByBreed);

  const toggleBreed = (breedName: string) => {
    setSelectedBreeds(
      selectedBreeds.includes(breedName)
        ? selectedBreeds.filter((b) => b !== breedName)
        : [...selectedBreeds, breedName]
    );
  };

  useEffect(() => {
    setPets(
      error || (selectedBreeds.length > 0 && data && data.length > 0)
        ? data
        : initialPets
    );
  }, [selectedBreeds, data]);

  return (
    <Layout>
      <BreedSelect
        breeds={breeds}
        toggleBreed={toggleBreed}
        selectedBreeds={selectedBreeds}
      />
      <PetList pets={pets} />
    </Layout>
  );
};

export async function getServerSideProps() {
  const [initialPets, breeds] = await Promise.all([
    getAnimals({ type: "dog" }),
    getBreeds({ type: "dog" }),
  ]);
  return { props: { initialPets, breeds } };
}

export default IndexPage;
