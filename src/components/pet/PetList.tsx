import Link from "next/link";
import styles from "./PetList.module.css";
import { Pet } from "../../types/pet";
import { PetListing } from "./PetListing";
import { Stack } from "../common/Stack";

interface Props {
  pets: Pet[];
}

export function PetList({ pets }: Props) {
  return (
    <Stack className={styles.stack}>
      {pets.map((pet) => {
        return (
          <li key={pet.id}>
            <Link href={`/pet/[id]`} as={`/pet/${pet.id}`}>
              <a className={styles.link}>
                <PetListing pet={pet} />
              </a>
            </Link>
          </li>
        );
      })}
    </Stack>
  );
}
