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
    password : {
        type : DataTypes.STRING,
    },
    gender : {
        type : DataTypes.STRING,
        allowNull : true
    },
    role : {
        type : DataTypes.STRING(10),
        defaultValue : "user",
    },
    birthday : {
        type : DataTypes.STRING(11),
        allowNull : true, defaultValue : "2001-01-01"
    }
},{
    tableName : "users",
    underscored : true
})
