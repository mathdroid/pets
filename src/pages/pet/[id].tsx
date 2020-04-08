import Head from "next/head";

import { Pet } from "../../types/pet";
import { getAnimalById } from "../../util/api";
import { Layout } from "../../components/layout/Layout";
import { PetDetail } from "../../components/pet/PetDetail";

interface IndexProps {
  pet: Pet;
}

const IndexPage = ({ pet }: IndexProps) => {
  return (
    <>
      <Head>
        <title>PETS! - {pet.name}</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:title" content={`PETS! - ${pet.name}`} />
        <meta property="og:url" content="https://pets.mathdro.id" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={pet.description} />
        <meta
          property="og:image"
          content={
            pet?.photos[0]?.full ?? `http://via.placeholder.com/1200x627`
          }
        />
      </Head>
      <Layout>
        <PetDetail pet={pet} />
      </Layout>
    </>
  );
};

export async function getServerSideProps(context) {
  const pet = await getAnimalById(context.params.id);
  return { props: { pet } };
}

export default IndexPage;
