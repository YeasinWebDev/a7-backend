"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectService = void 0;
const db_1 = require("../../config/db");
const createProject = async (body) => {
    const project = await db_1.prisma.projects.create({ data: body });
    return project;
};
const allProjects = async () => {
    const projects = await db_1.prisma.projects.findMany({});
    return projects;
};
const singleProject = async (id) => {
    const project = await db_1.prisma.projects.findUnique({ where: { id } });
    return project;
};
const updateProject = async (id, body) => {
    const project = await db_1.prisma.projects.update({ where: { id }, data: body });
    return project;
};
const deleteProject = async (id) => {
    const project = await db_1.prisma.projects.delete({ where: { id } });
    return project;
};
exports.projectService = { createProject, allProjects, singleProject, updateProject, deleteProject };
