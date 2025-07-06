import { Sequelize } from "sequelize";

const dbCon = new Sequelize("postgresql://fayzullo:Ny6IrVKHc0xVduM3eb5AjDx1xWfKZ9Nq@dpg-d1ifb3er433s73ah83b0-a.oregon-postgres.render.com/test_iq9l",{
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // Render.com kabi servislar uchun
    },
  },
  logging: false,
});

export default dbCon;
