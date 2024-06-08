const express = require("express");
const router = express.Router();
const FileController = require("../controllers/FileController");

module.exports = router;

router.post("/create", FileController.create)