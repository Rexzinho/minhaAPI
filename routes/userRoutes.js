const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");

router.post("/create", UserController.create);
router.get("/list", UserController.list);
router.get("/:id", UserController.getUser)

module.exports = router;