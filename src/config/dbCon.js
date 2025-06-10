import { Sequelize } from "sequelize";

const dbCon = new Sequelize({
    username : "fayzullo",
    password : "12345678",
    port : 5432,
    database : "dars1",
    host : "localhost",
    dialect : "postgres"
});

export default dbCon