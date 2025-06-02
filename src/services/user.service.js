import userModel from "../utils/models/userModel.js";

export default class UserService {
    constructor() {}

    static async createItem(body){
        const newUser = await userModel.create(body)
        return {
            id : newUser.id,
            newUser
        }
    }
}