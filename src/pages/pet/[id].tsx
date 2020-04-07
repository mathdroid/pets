import { Pet } from "../../types/pet";
import { getAnimalById } from "../../util/api";
import { Layout } from "../../components/layout/Layout";

interface IndexProps {
  pet: Pet;
}

const IndexPage = ({ pet }: IndexProps) => {
  return <Layout>{JSON.stringify(pet)}</Layout>;
};

export async function getServerSideProps(context) {
  const pet = await getAnimalById(context.params.id);
  return { props: { pet } };
}

export default IndexPage;
