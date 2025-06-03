import { Router } from "express"
import UserController from "../controllers/user.controller.js"
import { jwtMiddleware } from "../middlewares/jwtMiddleware.js"
import { loginValidation, registerValidate, updateValidaion } from "../middlewares/user validator.js"
import checkToken from "../middlewares/checkToken.js"
import { userResponseHandler } from "../middlewares/userResponseMiddlewares.js"

const user_router = Router()

user_router.post("/api/users/v1/register",registerValidate, UserController.register, jwtMiddleware)
user_router.post("/api/users/v2/login", loginValidation, UserController.login, jwtMiddleware)
user_router.put("/api/users/v3/update", checkToken, updateValidaion,UserController.updateUser, userResponseHandler)
user_router.get("/api/users/v5/getall", UserController.getAll, userResponseHandler)


export default user_router