import "dotenv/config";
import dbCon from "./config/dbCon.js"
import express from "express"
import user_router from "./routers/user.routes.js";
import { errorHandlers } from "./middlewares/errorHandlers.js";
import { hash, resurs } from "./utils/helper/jwt.js";

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(user_router)
app.use(errorHandlers)
!(
	async () => {
		try {
			await dbCon.authenticate()
			await dbCon.sync({force : true});
			console.clear()
			console.log(resurs)
			console.log("Db connectted ! ");

			app.listen(15975, () => console.log("http://localhost:15975"));
		} catch (error) {
			console.log("Catch ", error.message)
		}
	}
)();
