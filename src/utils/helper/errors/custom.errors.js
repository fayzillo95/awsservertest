export class CustomError extends Error{
    constructor(message, status) {
        super(message)
        this.status = status
    }
}

export class NotFoundError extends CustomError{
    constructor(target = "User"){
        super(target + " not found !", 404)
    }
}

export class InvalidBody extends CustomError {
    constructor(target) {
        super("Invalid data not allowed " + target + " !", 400)
    }
}

// export class name {
//     constructor(parameters) {
        
//     }
// }