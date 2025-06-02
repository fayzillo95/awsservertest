import Joi from "joi";

export default class UserValidation {
    constructor() {}

    static registerV(payload){
        const registerSchema = Joi.object({
            username : Joi.string().min(3).max(49).required(),
            email :Joi.string().email().min(11).required(),
            password :Joi.string().min(8).max(32).required(),
            gender :Joi.string().valid("male","female"),
            birthday : Joi.string().pattern(/^\d{4}-\d{2}-\d{2}$/).message("Invalid birthday must be in format YYYY-MM-DD !")
        })

        return registerSchema.validate(payload,{
            abortEarly : true,
            allowUnknown : false,
        })
    }
    static loginV(payload){
        const loginSchema = Joi.object({
            username : Joi.string().min(3).max(49).required(),
            password :Joi.string().min(8).max(32).required(),
        })

        return loginSchema.validate(payload,{
            abortEarly : true,
            allowUnknown : false,
        })
    }
    static updateV(payload){
        const updateSchema = Joi.object({
            username : Joi.string().min(3).max(49),
            email :Joi.string().email().min(11),
            password :Joi.string().min(8).max(32),
            gender :Joi.string().valid("male","female"),
            birthday : Joi.string().pattern(/^\d{4}-\d{2}-\d{2}$/).message("Invalid birthday must be in format YYYY-MM-DD !")
        }).min(1)

        return updateSchema.validate(payload,{
            abortEarly : true,
            allowUnknown : false,
        })
    }
}