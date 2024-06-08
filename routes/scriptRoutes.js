const express = require("express");
const router = express.Router();
const ScriptController = require("../controllers/ScriptController");
const checkTokenByFile = require("../middleware/checkTokenByFile")

module.exports = router;

router.post("/create", checkTokenByFile, ScriptController.create);