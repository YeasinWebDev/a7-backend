"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
const db_1 = require("../../config/db");
const bcrypt_1 = __importDefault(require("bcrypt"));
const AppError_1 = require("../../errors/AppError");
const JwtToken_1 = require("../../uilts/JwtToken");
const register = async (name, email, password, res) => {
    const hashedPassword = bcrypt_1.default.hashSync(password, 10);
    const user = await db_1.prisma.user.create({
        data: {
            name,
            email,
            password: hashedPassword,
        },
    });
    if (!user)
        throw new AppError_1.AppError("User not created", 500);
    const token = (0, JwtToken_1.createJwtToken)(user);
    res.cookie("token", token, { httpOnly: true, secure: true, sameSite: "none" });
    return user;
};
const login = async (email, password, res) => {
    const user = await db_1.prisma.user.findUnique({
        where: {
            email,
        },
    });
    if (!user)
        throw new AppError_1.AppError("User not found" + ": " + email, 404);
    let isPasswordMatch = bcrypt_1.default.compareSync(password, user.password);
    if (!isPasswordMatch) {
        throw new AppError_1.AppError("Invalid credentials", 401);
    }
    const token = (0, JwtToken_1.createJwtToken)(user);
    res.cookie("token", token, { httpOnly: true, secure: true, sameSite: "none" });
    return { user, token };
};
const me = async (token) => {
    const isUserExist = await db_1.prisma.user.findUnique({
        where: {
            email: token.email,
        },
    });
    if (!isUserExist)
        throw new AppError_1.AppError("User not found", 404);
    return isUserExist;
};
const logOut = (res) => {
    res.clearCookie("token", { httpOnly: true, secure: true, sameSite: "none" });
};
exports.userService = {
    login,
    register,
    me,
    logOut,
};
