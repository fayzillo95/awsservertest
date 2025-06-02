import "dotenv/config";
import dbCon from "./config/dbCon.js"
import express from "express"

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended : true}));


!(
	async () => {
		try {
			await dbCon.authenticate({foces: true})
			// await dbCon.sync();
			console.log("Db connectted ! ");
			app.listen(15975, () => console.log("http://localhost:15975"));
		} catch (error) {
			console.log("Catch ", error.message)
		}
	}
)();
