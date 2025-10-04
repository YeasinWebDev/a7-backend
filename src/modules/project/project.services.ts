import { Projects } from "@prisma/client";
import { prisma } from "../../config/db";

const createProject = async (body:Projects) => {
    const project = await prisma.projects.create({ data: body });
    return project;
}

const allProjects = async () => {
    const projects = await prisma.projects.findMany({});
    return projects;
}

const singleProject = async (id: string) => {
    const project = await prisma.projects.findUnique({ where: { id } });
    return project;
}

const updateProject = async (id: string, body:Projects) => {
    const project = await prisma.projects.update({ where: { id }, data: body });
    return project;
}

const deleteProject = async (id: string) => {
    const project = await prisma.projects.delete({ where: { id } });
    return project;
}

export const projectService = { createProject, allProjects, singleProject, updateProject, deleteProject };