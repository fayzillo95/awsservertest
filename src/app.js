import ezpress from "express"
import dbCon from "config/dbCon.js"

const app = express()

!(
	() => {
	try{
	await dbCon.authenticate()
	await dbCon.sync();
	console.log("Db connectted ! " );
	app.listen(15975,()=> console.log("http://localhost:15975"));
	}cathc(error){
	console.log("Catch ",error.message)
	}
)();
