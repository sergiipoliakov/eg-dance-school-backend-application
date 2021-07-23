const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/events");

router.get("/", ctrl.gelAll);

router.post("/", ctrl.create);

router.get("/:id", ctrl.getById);

router.put("/:id", ctrl.update);

router.delete("/:id", ctrl.remove);

module.exports = router;
