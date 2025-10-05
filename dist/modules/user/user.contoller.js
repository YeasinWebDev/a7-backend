"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const user_service_1 = require("./user.service");
const JwtToken_1 = require("../../uilts/JwtToken");
const register = async (req, res) => {
    try {
        const user = await user_service_1.userService.register(req.body.name, req.body.email, req.body.password, res);
        return res.status(201).json(user);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};
const login = async (req, res, next) => {
    try {
        if (!req.body.email && !req.body.password) {
            throw new Error("Email and password are required");
        }
        const user = await user_service_1.userService.login(req.body.email, req.body.password, res);
        return res.status(200).json(user);
    }
    catch (error) {
        next(error);
    }
};
const me = async (req, res) => {
    try {
        const accessToken = req.cookies.token;
        const token = (0, JwtToken_1.verifyToken)(accessToken, process.env.JWT_SECRET);
        if (!token)
            return res.status(401).json({ message: "Unauthorized" });
        const user = await user_service_1.userService.me(token);
        return res.status(200).json(user);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};
const logout = (req, res) => {
    try {
        user_service_1.userService.logOut(res);
        return res.status(200).json({ message: "Logout successful" });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};
exports.userController = {
    login,
    register,
    me,
    logout,
};
