import logger from "../utils/helper/logger/writeLogs.js"

export const errorHandlers = (err, req, res, next) => {
    if (err.status) {
        logger(err.message, err.stack, "info", "userlogs")
        res.status(err.status).json(
            {
                success: false,
                message: err.message,
                data: null
            }
        )
        return
    }
    logger(err.message, err.stack)
    res.status(500).json({
        success: false,
        message: "Internal server error !",
        data: null
    })
}