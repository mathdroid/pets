import qs from "qs";

import { fetcher } from "./fetcher";
import { Pet } from "../types/pet";
import { Breed } from "../types/breed";

interface GetAnimalsQuery {
  type?: string;
  breed?: string | string[];
}

export const getAnimals = async (query?: GetAnimalsQuery) => {
  const { type, breed } = query;
  const data = await fetcher<{ animals: Pet[] }>(
    `https://api.petfinder.com/v2/animals?${qs.stringify({ type, breed })}`
  );
  return data.animals;
};

export const getAnimalById = async (id: string) => {
  const data = await fetcher<{ animal: Pet }>(
    `https://api.petfinder.com/v2/animals/${id}`
  );
  return data.animal;
};

interface GetBreedsQuery {
  type?: string;
}

export const getBreeds = async (query?: GetBreedsQuery) => {
  const { type } = query;
  const data = await fetcher<{ breeds: Breed[] }>(
    `https://api.petfinder.com/v2/types/${type}/breeds`
  );
  return data.breeds;
};
