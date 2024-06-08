const express = require("express");
const router = express.Router();
const FileController = require("../controllers/FileController");
const checkTokenByFolder = require("../middleware/checkTokenByFolder");

module.exports = router;

router.post("/create", checkTokenByFolder, FileController.create)