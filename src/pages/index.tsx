import Link from "next/link";

import { Pet } from "../types/pet";
import { getAnimals } from "../util/api";

interface IndexProps {
  pets: Pet[];
}

const IndexPage = ({ pets }: IndexProps) => {
  return (
    <>
      {pets.map((pet) => {
        return (
          <Link href={`/pet/${pet.id}`}>
            <a>{pet.name}</a>
          </Link>
        );
      })}
    </>
  );
};

export async function getServerSideProps() {
  const pets = await getAnimals({ type: "dog" });
  return { props: { pets } };
}

export default IndexPage;
