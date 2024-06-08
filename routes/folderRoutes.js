const express = require("express");
const router = express.Router();
const FolderController = require("../controllers/FolderController");
const checkUser = require("../middleware/checkUser");

module.exports = router;

router.post("/create", checkUser, FolderController.create);