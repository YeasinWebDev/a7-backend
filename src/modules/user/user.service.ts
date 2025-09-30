import { prisma } from "../../config/db";
import bcrypt from "bcrypt";
import { AppError } from "../../errors/AppError";
import { Response } from "express";
import { createJwtToken } from "../../uilts/JwtToken";
import { JwtPayload } from "jsonwebtoken";



const register = async (name: string, email: string, password: string, res: Response) => {
  const hashedPassword = bcrypt.hashSync(password, 10);
  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  if (!user) throw new AppError("User not created", 500);

  const token = createJwtToken(user);

  res.cookie("token", token, { httpOnly: true, secure: true, sameSite: "none" });

  return user;
};

const login = async (email: string, password: string ,res: Response) => {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (!user) throw new AppError("User not found" + ": " + email, 404);

  let isPasswordMatch = bcrypt.compareSync(password, user.password);
  if (!isPasswordMatch) {
    throw new AppError("Invalid credentials", 401);
  }

  const token = createJwtToken(user);

  res.cookie("token", token, { httpOnly: true, secure: true, sameSite: "none" });

  return user;
};

const me = async (token: JwtPayload) => {
    const isUserExist = await prisma.user.findUnique({
      where: {
        email: token.email
      },
    });

    if(!isUserExist) throw new AppError("User not found", 404)
    return isUserExist
};

export const userService = {
  login,
  register,
  me
};
