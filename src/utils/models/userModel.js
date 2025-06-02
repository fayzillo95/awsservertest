import dbCon from "../../config/dbCon.js";
import { DataTypes } from "sequelize";



export default dbCon.define("User", {
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    username : {
        type : DataTypes.STRING(50),
        unique : true,
        allowNull : false
    },
    email : {
        type : DataTypes.STRING(100),
        unique : true,
        validate : {
            isEmail : true,
        },
        allowNull : false
    },
    gender : {
        type : DataTypes.STRING,
        validate : {
            isIn : ["male", "female"]
        },
        allowNull : true
    },
    role : {
        type : DataTypes.STRING(10),
        validate : {
            isIn : ["superadmin", "user", "admin" , "moderator"]
        },
        defaultValue : "user",
        allowNull : true
    },
    birthday : {
        type : DataTypes.STRING(11),
        validate : {
            is: /^\d{4}-\d{2}-\d{2}$/ // YYYY-MM-DD format
        },
        allowNull : false
    }
})
