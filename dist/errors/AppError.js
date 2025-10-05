"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppError = void 0;
// src/errors/AppError.ts
class AppError extends Error {
    constructor(message, statusCode = 500, isOperational = true) {
        super(message);
        this.statusCode = statusCode;
        this.isOperational = isOperational;
        // Restore prototype chain (important when extending built-ins)
        Object.setPrototypeOf(this, new.target.prototype);
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.AppError = AppError;
