const express = require("express");
const router = express.Router();
const ScriptController = require("../controllers/ScriptController");

module.exports = router;

router.post("/create", ScriptController.create);