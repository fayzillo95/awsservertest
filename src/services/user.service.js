import checkExists from "../utils/helper/checkExists.js";
import { CustomError } from "../utils/helper/errors/custom.errors.js";
import userModel from "../utils/models/userModel.js";
import bcrypt from "bcrypt";
import { hash } from "../utils/helper/jwt.js";


export default class UserService {
    constructor() { }

    static async getAll(){
        return userModel.findAll()
    }

    static async createItem(body) {
        console.log(hash)
        body.password = await bcrypt.hash(body.password, parseInt(hash))
        const newUser = await userModel.create(body)
        return {
            id: newUser.id,
        }
    }
    static async checkSign(body) {
        const user = await checkExists({ username: body.username }, userModel, "User")
        const isPass = await bcrypt.compare(body.password, user.password)
        if (!isPass) {
            throw new CustomError("Invalid username or password !", 401)
        }
        return {
            id : user.id
        }
    }
    static async updateUser(body, id) {
        console.log(id)
        console.log(body)
        const oldUser = await userModel.findByPk(parseInt(id))
        const updatedUser = await userModel.update(body, {
            where: { id : parseInt(id)},
            returning: true
        });

        return [updatedUser,oldUser];
    }
    static async deleteItem(id){
        const user = await checkExists({id : id})
        const result = await userModel.destroy({wherre : {id : parseInt(id)}})
        if(result === 0 ){
            throw new Error("Something went wrong. Please try again later.", 404)
        }
        return user
    }
}