const express = require("express");
const router = express.Router();
const pages = express();
pages.use(express.static("public"));

const { articles } = require("../../data/data.json");

// pages.set("views", "./views");
pages.set("view engine", "ejs");
pages.use(express.urlencoded({ extended: false }));

router.use((req, res, next) => {
	console.log("Time", Date.now());
	next();
});

// router.use("/", (req, res) => {
// 	res.render("index", { name: "Виталий" });
// });

router.use("/create-event", (req, res) => {
	res.render("create-event");
});
module.exports = router;
