"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectController = void 0;
const project_services_1 = require("./project.services");
const createProject = async (req, res, next) => {
    try {
        const ans = await project_services_1.projectService.createProject(req.body);
        return res.status(201).json(ans);
    }
    catch (error) {
        next(error);
    }
};
const allProjects = async (req, res, next) => {
    try {
        const ans = await project_services_1.projectService.allProjects();
        return res.status(200).json(ans);
    }
    catch (error) {
        next(error);
    }
};
const singleProject = async (req, res, next) => {
    try {
        const ans = await project_services_1.projectService.singleProject(req.params.id);
        return res.status(200).json(ans);
    }
    catch (error) {
        next(error);
    }
};
const updateProject = async (req, res, next) => {
    try {
        const ans = await project_services_1.projectService.updateProject(req.params.id, req.body);
        return res.status(200).json(ans);
    }
    catch (error) {
        next(error);
    }
};
const deleteProject = async (req, res, next) => {
    try {
        const ans = await project_services_1.projectService.deleteProject(req.params.id);
        return res.status(200).json(ans);
    }
    catch (error) {
        next(error);
    }
};
exports.projectController = { createProject, allProjects, singleProject, updateProject, deleteProject };
