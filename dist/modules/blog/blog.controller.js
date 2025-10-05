"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogController = void 0;
const blog_services_1 = require("./blog.services");
const createBlogs = async (req, res, next) => {
    try {
        const ans = await blog_services_1.blogService.createBlog(req.body);
        return res.status(201).json(ans);
    }
    catch (error) {
        next(error);
    }
};
const allBlogs = async (req, res, next) => {
    try {
        const ans = await blog_services_1.blogService.allBlogs();
        return res.status(200).json(ans);
    }
    catch (error) {
        next(error);
    }
};
const singleBlog = async (req, res, next) => {
    try {
        const ans = await blog_services_1.blogService.singleBlog(req.params.id);
        return res.status(200).json(ans);
    }
    catch (error) {
        next(error);
    }
};
const updateBlog = async (req, res, next) => {
    try {
        const ans = await blog_services_1.blogService.updateBlog(req.params.id, req.body);
        return res.status(200).json(ans);
    }
    catch (error) {
        next(error);
    }
};
const deleteBlog = async (req, res, next) => {
    try {
        const ans = await blog_services_1.blogService.deleteBlog(req.params.id);
        return res.status(200).json(ans);
    }
    catch (error) {
        next(error);
    }
};
exports.blogController = { createBlogs, allBlogs, singleBlog, updateBlog, deleteBlog };
