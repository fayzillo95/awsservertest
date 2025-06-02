import { accessToken, refreshToken } from "../utils/helper/jwt.js";

export function jwtMiddleware(req, res, next) {
    try {
        const result = {
            success : true,
            accessToken :accessToken(req.user),
            refreshToken : refreshToken(req.user)
        }
        res.status(201).json(result)
    } catch (error) {
        next(error)
    }
}