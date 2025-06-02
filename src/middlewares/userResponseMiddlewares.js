export const userResponseHandler = (req, res, next) => {
    try {
        const result = {
            succes : true,
            message  : req.message || "Complieted !",
            data : req.user
        }
        res.status(req.status || 200).json(result)
    } catch (error) {
        next(error)
    }
}