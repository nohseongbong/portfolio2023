import { Project } from "@/types/project";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  projects: Project[];
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const datas = require("/data/project.json");
  res.status(200).json(datas);
}
