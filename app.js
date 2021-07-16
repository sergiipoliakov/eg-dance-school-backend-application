const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const fs = require("fs/promises");
const path = require("path");

// const { articles } = require("./data/data.json");

const app = express();
app.use(cors());
app.use(logger("dev"));

// app.set("views", "./views");
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.get("/index", require("./router/api/dance-school"));

app.get("/create-event", require("./router/api/dance-school"));

app.post("/create-event", async (req, res) => {
	await fs.writeFile(
		path.join(__dirname, "data", "form.json"),

		JSON.stringify([req.body], null, 2)
	);
	res.redirect("/create-event");
});

app.get("/blog", (req, res) => {
	res.render("blog", { articles });
});

app.use((_req, res) => {
	res.status(404).json({ message: "not found" });
});

app.use((err, req, res, next) => {
	res.status(500).json({ message: err.messge });
});

// const port = 3000;

// app.listen(port, () => {
// 	console.log(`Example app listening at http://localhost:${port}`);
// });

module.exports = app;
