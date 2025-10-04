import compression from "compression";
import cors from "cors";
import express from "express";
import { errorHandler } from "./middlewares/errorHandler";
import { userRouter } from "./modules/user/user.route";
import cookieParser from "cookie-parser";
import { blogRouter } from "./modules/blog/blog.route";
import { projectRouter } from "./modules/project/project.route";

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
app.use('/blog', blogRouter)
app.use('/project', projectRouter)


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
