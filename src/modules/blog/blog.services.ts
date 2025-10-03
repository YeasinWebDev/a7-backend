import { Blogs } from "@prisma/client";
import { prisma } from "../../config/db";

const createBlog = async (body:Blogs) => {
  const blog = await prisma.blogs.create({ data: body });
  return blog;
};

const allBlogs = async () => {
  const blog = await prisma.blogs.findMany({});
  return blog;
};

const singleBlog = async (id: string) => {
  const blog = await prisma.blogs.findUnique({ where: { id } });
  return blog;
};

const updateBlog = async (id: string, body:Blogs) => {
  const blog = await prisma.blogs.update({ where: { id }, data: body });
  return blog;
};

const deleteBlog = async (id: string) => {
  const blog = await prisma.blogs.delete({ where: { id } });
  return blog;
};

export const blogService = { createBlog, allBlogs, singleBlog, updateBlog, deleteBlog };
