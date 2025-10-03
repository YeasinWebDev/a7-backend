import { NextFunction, Request, Response } from "express";
import { blogService } from "./blog.services";

const createBlogs = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const ans = await blogService.createBlog(req.body);
    console.log(ans, "ans");
    return res.status(201).json(ans);
  } catch (error) {
    next(error);
  }
};

const allBlogs = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const ans = await blogService.allBlogs();
    return res.status(200).json(ans);
  } catch (error) {
    next(error);
  }
};

const singleBlog = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const ans = await blogService.singleBlog(req.params.id);
    return res.status(200).json(ans);
  } catch (error) {
    next(error);
  }
};

const updateBlog = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const ans = await blogService.updateBlog(req.params.id, req.body);
    return res.status(200).json(ans);
  } catch (error) {
    next(error);
  }
};

const deleteBlog = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const ans = await blogService.deleteBlog(req.params.id);
    return res.status(200).json(ans);
  } catch (error) {
    next(error);
  }
};

export const blogController = { createBlogs, allBlogs, singleBlog, updateBlog, deleteBlog };
