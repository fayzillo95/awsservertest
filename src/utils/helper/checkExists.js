import { NotFoundError } from "./errors/custom.errors.js"

export default async function checkExists(filter, model, target) {
    const result = await model.findOne({where : filter})
    if (!result) {
        throw new NotFoundError(target)
    }
    return result

}