"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const db_1 = require("./config/db");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
async function connectToDB() {
    try {
        await db_1.prisma.$connect();
        console.log("*** DB connection successful!!");
    }
    catch (error) {
        console.error("*** DB connection failed!", error);
    }
}
connectToDB();
// ✅ Local development only
if (process.env.NODE_ENV !== "production") {
    const port = process.env.PORT || 5000;
    app_1.default.listen(port, () => {
        console.log(`🚀 Server running locally on port ${port}`);
    });
}
exports.default = app_1.default;
