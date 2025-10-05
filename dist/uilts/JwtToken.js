"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.createJwtToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const createJwtToken = (user) => {
    const token = jsonwebtoken_1.default.sign({ id: user.id, name: user.name, email: user.email }, process.env.JWT_SECRET, {
        expiresIn: "1d",
    });
    return token;
};
exports.createJwtToken = createJwtToken;
const verifyToken = (token, secret) => {
    if (!token)
        return false;
    const verifiedToken = jsonwebtoken_1.default.verify(token, secret);
    return verifiedToken;
};
exports.verifyToken = verifyToken;
