const express = require("express");
const fs = require("fs/promises");
const path = require("path");
const app = express();
const { articles } = require("./data/data.json");
const port = 3000;
console.log(articles);

app.use(express.static("public"));

app.set("views", "./views");
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
	res.render("index", { name: "Виталий" });
});

app.get("/create-event", (req, res) => {
	res.render("create-event");
});

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

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
