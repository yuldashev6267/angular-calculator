const express = require("express");
const router = express.Router();

const historyController = require("../controller/historyController");

router.post("/history", historyController.createHistory);
router.get("/history", historyController.getAllHistory);
router.delete("/history", historyController.deleteHistory);

module.exports = router;
