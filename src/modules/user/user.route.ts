import { Router } from "express";
import { userController } from "./user.contoller";


export const userRouter = Router()

userRouter.post('/login',userController.login)
userRouter.post('/register',userController.register)
userRouter.get('/me',userController.me)