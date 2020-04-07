import { Pet } from "../../types/pet";
import { getAnimalById } from "../../util/api";
import { Layout } from "../../components/layout/Layout";
import { PetDetail } from "../../components/pet/PetDetail";

interface IndexProps {
  pet: Pet;
}

const IndexPage = ({ pet }: IndexProps) => {
  return (
    <Layout>
      <PetDetail pet={pet} />
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const pet = await getAnimalById(context.params.id);
  return { props: { pet } };
}

export default IndexPage;
