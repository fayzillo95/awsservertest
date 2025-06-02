import JWT from "jsonwebtoken";

const secretAccess = process.env.JWT_ACCESS_KEY
const secretRefresh = process.env.JWT_REFRESH_KEY
const expireIn_acs = process.env.JWT_EXP_IN_A
const expireIn_ref = process.env.JWT_EXP_IN_R

export const hash = process.env.HASH
export const accessToken = (payload) => JWT.sign(payload, secretAccess, { expiresIn: expireIn_acs })
export const refreshToken = (payload) => JWT.sign(payload, secretAccess, { expiresIn: expireIn_ref })
export const jwtVery_Access = (token) => JWT.verify(token, secretAccess)
export const jwtVery_Refresh = (token) => JWT.verify(token, secretRefresh)
export const resurs = {
    secretAccess,secretRefresh,expireIn_acs,expireIn_ref
}
