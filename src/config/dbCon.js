import { Sequelize } from "sequelize";

const dbCon = new Sequelize({
    username : "fayzullo",
    password : "12345678",
    port : 5432,
    database : "test",
    host : "localhost",
    dialect : "postgres"
});

export default dbCon