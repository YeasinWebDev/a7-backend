import { User } from "@prisma/client";
import jwt from "jsonwebtoken";

export const createJwtToken = (user: User) => {
  const token = jwt.sign({ id: user.id, name: user.name, email: user.email }, process.env.JWT_SECRET!, {
    expiresIn: "1d",
  });
  return token;
};

export const verifyToken = (token: string, secret: string) => {
  if(!token) return false;
  const verifiedToken = jwt.verify(token, secret);

  return verifiedToken;
};