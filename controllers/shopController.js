const Product = require("../models/product");
Product.fetch();
exports.Shop = (req, res) => {
	res.render("shop", { title: "Shop product", navTitle: "Wellcome page Shop product", products: Product.getItems() });
}