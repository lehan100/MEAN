const express = require("express");
const router = express.Router();
//const products =[];
const productController = require("../controllers/productController");
router.get("/add-product",productController.addProduct);
router.post("/post-product",productController.postProduct);
//module.exports.products = products;
module.exports = router;