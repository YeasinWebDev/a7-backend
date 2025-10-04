import { NextFunction, Request, Response } from "express";
import { projectService } from "./project.services";

const createProject = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const ans = await projectService.createProject(req.body);
        return res.status(201).json(ans);
    } catch (error) {
        next(error);
    }
}

const allProjects = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const ans = await projectService.allProjects();
        return res.status(200).json(ans);
    } catch (error) {
        next(error);
    }
}

const singleProject = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const ans = await projectService.singleProject(req.params.id);
        return res.status(200).json(ans);
    } catch (error) {
        next(error);
    }
}


const updateProject = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const ans = await projectService.updateProject(req.params.id, req.body);
        return res.status(200).json(ans);
    } catch (error) {
        next(error);
    }
}

const deleteProject = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const ans = await projectService.deleteProject(req.params.id);
        return res.status(200).json(ans);
    } catch (error) {
        next(error);
    }
}


export const projectController = { createProject, allProjects, singleProject, updateProject, deleteProject };