import checkExists from "../utils/helper/checkExists.js"
import { CustomError, InvalidBody } from "../utils/helper/errors/custom.errors.js"
import userModel from "../utils/models/userModel.js"
import UserValidation from "../utils/helper/validations/userVadation.js"

export const registerValidate = async (req, res, next) => {
    try {
        if(!req.body || Object.values(req.body).length == 0 ){
            throw new InvalidBody("req.body? ")
        }
        const {error} = UserValidation.registerV(req.body)
        if(error){
            throw new CustomError(error.details.map(d => d.message).join(" | "),400)
        }
        const user = await userModel.findOne({where : {username: req.body?.username}})
        if(user){
            throw new CustomError(`User already exists ${req.body.username}`,400)
        }
        next()
    } catch (error) {
        next(error)
    }
}

export const loginValidation = async (req, res, next) => {
    try {
        if(!req.body || Object.values(req.body).length === 0){
            throw new InvalidBody("req.body? ")
        }
        if(!req.body.username){
            throw new InvalidBody("username ")
        }
        if(!req.body.password){
            throw new InvalidBody(" password ")
        }
        const user = await checkExists({username : req.body?.username},userModel,"User")

        const {error}  = UserValidation.loginV(req.body)
        if(error){
            throw new CustomError(error.details.map(d => d.message).join(" | "), 400)
        } 
        next()
    } catch (error) {
        next(error)
    }
}

export const updateValidaion = async (req, res, next) => {
    try {
        const user = await checkExists({id : req?.user?.id},userModel,"User")

        const {error} = UserValidation.updateV(req.body)
        if(error){
            throw new CustomError(error.details.map(d => d.message).join(" | "), 400)
        }
        next()
    } catch (error) {
        next(error)
    }
}