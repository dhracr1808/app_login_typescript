import { Request, Response } from "express";
import User, { IUser } from "./../models/User";
import jwt from "jsonwebtoken";
import { generateToken } from "./../libs";
export const signup = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  const user = (await User.create({ name, email, password })) as IUser;
  const token = generateToken({ _id: user._id });
  res.header("auth-token", token).json({ message: "user create success" });
};

export const signin = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const message = "user or password is incorrect";
  const user = await User.findOne({ email });
  if (!user) return res.status(401).json({ message });
  const verifyPassword = await user.verifypass(password);
  if (!verifyPassword) return res.status(401).json({ message });
  const token = generateToken({ _id: user._id });
  res.header("auth-token", token).json({ auth: true, token });
};

export const profile = async (req: Request, res: Response) => {
  const user = await User.findById(req._idUser);
  res.send(user);
};
