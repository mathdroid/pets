import { NextApiRequest, NextApiResponse } from "next";
import { getAnimals } from "../../util/api";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  res.json(await getAnimals(req.query));
};
