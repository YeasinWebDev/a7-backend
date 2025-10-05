"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const compression_1 = __importDefault(require("compression"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const errorHandler_1 = require("./middlewares/errorHandler");
const user_route_1 = require("./modules/user/user.route");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const blog_route_1 = require("./modules/blog/blog.route");
const project_route_1 = require("./modules/project/project.route");
const app = (0, express_1.default)();
// Middleware
app.use((0, compression_1.default)());
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)({
    origin: ["http://localhost:3000", "https://a7-frontend.vercel.app"],
    credentials: true,
}));
// routes
app.use('/user', user_route_1.userRouter);
app.use('/blog', blog_route_1.blogRouter);
app.use('/project', project_route_1.projectRouter);
// Default route for testing
app.get("/", (_req, res) => {
    res.send("API is running");
});
// 404 Handler
app.use((req, res, next) => {
    res.status(404).json({
        success: false,
        message: "Route Not Found",
    });
});
app.use(errorHandler_1.errorHandler);
exports.default = app;
