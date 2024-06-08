const express = require("express");
const router = express.Router();
const FolderController = require("../controllers/FolderController");
const checkTokenByUser = require("../middleware/checkTokenByUser");

module.exports = router;

router.post("/create", checkTokenByUser, FolderController.create);