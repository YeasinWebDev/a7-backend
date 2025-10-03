import { Router } from "express";
import { blogController } from "./blog.controller";

export const blogRouter = Router();

blogRouter.post("/create", blogController.createBlogs);
blogRouter.get("/all", blogController.allBlogs);
blogRouter.get("/:id", blogController.singleBlog);
blogRouter.put("/update/:id", blogController.updateBlog);
blogRouter.delete("/delete/:id", blogController.deleteBlog);
