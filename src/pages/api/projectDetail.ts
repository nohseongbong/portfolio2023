import { Project } from "@/types/project";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  project: Project;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const datas = require("/data/project.json");
  const project = datas.filter((item: Project) => {
    return item.id === req.body.id;
  });
  res.status(200).json(project[0]);
  return;
}
