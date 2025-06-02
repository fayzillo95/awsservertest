import UserService from "../services/user.service";

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
}
