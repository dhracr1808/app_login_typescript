import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { TOKEN_SECRET } from "./../config";
interface IToken {
  _id: object;
  iat: number;
}
export const verify = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header("auth-token");
  if (!token) return res.status(401).json({ message: "no token" });
  jwt.verify(token, TOKEN_SECRET, (err, user: any) => {
    if (err) return res.status(401).json({ message: err.message });
    req._idUser = user._id;
    next();
  });
};

export const generateToken = (token: object) => {
  return jwt.sign(token, TOKEN_SECRET);
};
