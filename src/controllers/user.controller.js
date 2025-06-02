import UserService from "../services/user.service.js";

export default class UserController {
    constructor() {}

    static async register(req, res, next) {
        try {
            req.user = await UserService.createItem(req.body)
            req.status = 201
            next()
        } catch (error) {
            next(error)
        }
    }
    static async login(req, res, next) {
        try {
            const {body} = req
            req.user = await UserService.checkSign(body)
            next()
        } catch (error) {
            next(error)
        }
    }
    static async updateUser(req, res, next) {
        try {
            const {body} = req
            console.log(body)
            req.user = await UserService.updateUser(body,req.user.id)
            req.message = "User updated !"
            next()
        } catch (error) {
            next(error)
        }
    }
    static async deleteUser(req, res, next) {
        try {
            const {body} = req
            console.log(req.user)
            req.user = await UserService.deleteItem(req.user.id)
            req.message = "User deleted !"
            next()
        } catch (error) {
            next(error)
        }
    }
    
}
