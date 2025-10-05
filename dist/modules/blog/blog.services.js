"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogService = void 0;
const db_1 = require("../../config/db");
const createBlog = async (body) => {
    const blog = await db_1.prisma.blogs.create({ data: body });
    return blog;
};
const allBlogs = async () => {
    const blog = await db_1.prisma.blogs.findMany({});
    return blog;
};
const singleBlog = async (id) => {
    const blog = await db_1.prisma.blogs.findUnique({ where: { id } });
    return blog;
};
const updateBlog = async (id, body) => {
    const blog = await db_1.prisma.blogs.update({ where: { id }, data: body });
    return blog;
};
const deleteBlog = async (id) => {
    const blog = await db_1.prisma.blogs.delete({ where: { id } });
    return blog;
};
exports.blogService = { createBlog, allBlogs, singleBlog, updateBlog, deleteBlog };
