import JWT from "jsonwebtoken";
import { CustomError, NotFoundError } from "../utils/helper/errors/custom.errors.js";
import { jwtVery_Access, jwtVery_Refresh } from "../utils/helper/jwt.js";

const checkToken = function (req, res, next) {
    try {
        const auth = req.headers.authorization
        if (!auth) {
            throw new NotFoundError("Token ")
        }
        if (!auth.startsWith("Bearer ")) {
            throw new CustomError("Invalid token must be in Bearer token !", 401)
        }
        let user=undefined
        let token = auth.split(" ")[1]
        try {
            user = jwtVery_Access(token)
        } catch (error) {
            user = jwtVery_Refresh(token)
        }
        req.user = {id:user.id}
        next()
    } catch (error) {
        if(["JsonWebTokenError", "InvalidToken"].includes(error?.name)){
            error.status = 401
        }
        next(error)
    }
}

export default checkToken