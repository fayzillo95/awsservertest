import "dotenv/config";
import dbCon from "./config/dbCon.js"
import express from "express"
import user_router from "./routers/user.routes.js";
import { errorHandlers } from "./middlewares/errorHandlers.js";
import { hash, resurs } from "./utils/helper/jwt.js";

const app = express();
const PORT = process.env.PORT || 15975;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(user_router);
app.use(errorHandlers);

!(
	async () => {
		try {
			await dbCon.authenticate();
			await dbCon.sync({ force: true });
			console.clear();
			console.log(resurs);
			console.log("Db connected!");

			app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
		} catch (error) {
			console.log("Catch", error.message);
		}
	}
)();
