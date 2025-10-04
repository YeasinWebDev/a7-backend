import { Router } from "express";
import { projectController } from "./project.controller";

export const projectRouter = Router();

projectRouter.post("/create", projectController.createProject);
projectRouter.get("/all", projectController.allProjects);
projectRouter.get("/:id", projectController.singleProject);
projectRouter.put("/:id", projectController.updateProject);
projectRouter.delete("/:id", projectController.deleteProject);
