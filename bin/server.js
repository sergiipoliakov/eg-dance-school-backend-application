const app = require("../app");

const db = require("../model/db");
console.log("🚀 ~ file: server.js ~ line 4 ~ db", db);
//eqweqwe

const PORT = process.env.PORT || 3000;

db.then(() => {
	app.listen(PORT, () => {
		console.log(`Start our server on PORT: ${PORT}`);
	});
}).catch((err) => {
	console.log(`Server not running. Error message: ${err.message}`);
});
