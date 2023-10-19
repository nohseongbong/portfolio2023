import { User } from "@/types/user";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse<User>) {
  const data = require("/data/user.json");
  res.status(200).json(data);
}
