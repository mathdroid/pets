import { useState, useEffect } from "react";
import useSWR from "swr";
import qs from "qs";
import ReactTags from "react-tag-autocomplete";

import { Pet } from "../types/pet";
import { getAnimals, getBreeds } from "../util/api";
import { Layout } from "../components/layout/Layout";
import { PetList } from "../components/pet/PetList";
import { Breed } from "../types/breed";
import { fetch } from "../util/fetcher";
import { BreedSelect } from "../components/pet/BreedSelect";
import { Tag } from "../components/common/Tag";

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

interface TagOption {
  id: string;
  name: string;
}

const IndexPage = ({ initialPets, breeds }: IndexProps) => {
  const [selectedBreeds, setSelectedBreeds] = useState<string[]>([]);
  const [pets, setPets] = useState<Pet[]>(initialPets);
  const { data, error, isValidating } = useSWR(
    `${selectedBreeds.join(",")}`,
    fetchByBreed
  );

  const [tags, setTags] = useState<TagOption[]>(
    selectedBreeds.map((name) => ({
      id: name,
      name,
    }))
  );

  const handleDelete = (i: number) => {
    const _tags = tags.slice(0);
    _tags.splice(i, 1);
    setTags(_tags);

    setSelectedBreeds(_tags.map((tag) => tag.name));
  };

  const handleAddition = (tag: TagOption) => {
    const _tags = [...tags, tag];
    setTags(_tags);
    setSelectedBreeds(_tags.map((tag) => tag.name));
  };

  const toggleBreed = (breedName: string) => {
    setSelectedBreeds(
      selectedBreeds.includes(breedName)
        ? selectedBreeds.filter((b) => b !== breedName)
        : [...selectedBreeds, breedName]
    );
  };

  useEffect(() => {
    setPets(
      error ||
        (!isValidating && selectedBreeds.length > 0 && data && data.length > 0)
        ? data
        : initialPets
    );
  }, [selectedBreeds, data]);

  return (
    <Layout>
      <ReactTags
        tags={tags}
        suggestions={breeds.map((breed) => ({
          id: breed.name,
          name: breed.name,
        }))}
        handleDelete={handleDelete}
        handleAddition={handleAddition}
        placeholder="Search by breed (example: Labradoodle)"
      />
      {selectedBreeds.length > 0 && isValidating && <span>Loading...</span>}
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
