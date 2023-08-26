// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import dbConnect from "../../src/lib/database/db";
import { User } from "../../src/lib/models/user.model";

export default async function handler(req, res) {
  await dbConnect();

  const users = await User.find();

  res.status(200).json({ data: { users } });
}
