import { Request, Response } from "express";
const pgk = require("./../../package.json");
const name = pgk.name;
const author = pgk.author;
const description = pgk.description;
const version = pgk.version;

export const especificacion = (req: Request, res: Response) => {
  res.json({ author, name, description, version });
};
