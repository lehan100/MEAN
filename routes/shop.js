const express = require("express");
const router = express.Router();
//const adminProduct = require("./admin");
const shopController = require("../controllers/shopController");
router.get("/shop",shopController.Shop );

module.exports = router;