import compression from "compression";
import cors from "cors";
import express from "express";
import { errorHandler } from "./middlewares/errorHandler";
import { userRouter } from "./modules/user/user.route";
import cookieParser from "cookie-parser";

const app = express();

// Middleware
app.use(cors()); 
app.use(compression()); 
app.use(express.json()); 
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// routes
app.use('/user', userRouter)


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

app.use(errorHandler)
export default app;
