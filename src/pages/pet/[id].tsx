import { Pet } from "../../types/pet";
import { getAnimalById } from "../../util/api";

interface IndexProps {
  pet: Pet;
}

const IndexPage = ({ pet }: IndexProps) => {
  return <>{JSON.stringify(pet)}</>;
};

export async function getServerSideProps(context) {
  const pet = await getAnimalById(context.params.id);
  return { props: { pet } };
}

export default IndexPage;
