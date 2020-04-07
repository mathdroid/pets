import { Pet } from "../types/pet";
import { getAnimals } from "../util/api";
import { Layout } from "../components/layout/Layout";
import { PetList } from "../components/pet/PetList";

interface IndexProps {
  pets: Pet[];
}

const IndexPage = ({ pets }: IndexProps) => {
  return (
    <Layout>
      <PetList pets={pets} />
    </Layout>
  );
};

export async function getServerSideProps() {
  const [pets] = await Promise.all([getAnimals({ type: "dog" })]);
  return { props: { pets } };
}

export default IndexPage;
