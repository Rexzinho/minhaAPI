const express = require("express");
const router = express.Router();
const FolderController = require("../controllers/FolderController");

module.exports = router;

router.post("/create", FolderController.create);
router.get("/show", FolderController.show);