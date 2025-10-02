import { NextFunction, Request, Response } from "express";
import { userService } from "./user.service";
import { verifyToken } from "../../uilts/JwtToken";
import { JwtPayload } from "jsonwebtoken";

const register = async (req: Request, res: Response) => {
  try {
    const user = await userService.register(req.body.name, req.body.email, req.body.password, res);
    return res.status(201).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.body.email && !req.body.password) {
      throw new Error("Email and password are required");
    }

    const user = await userService.login(req.body.email, req.body.password, res);

    return res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

const me = async (req: Request, res: Response) => {
  try {
    const accessToken = req.cookies.token;
    const token = verifyToken(accessToken, process.env.JWT_SECRET!) as JwtPayload;
    const user = await userService.me(token);
    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const logout = (req: Request, res: Response) => {
  try {
    userService.logOut(res);
    return res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const userController = {
  login,
  register,
  me,
  logout,
};
