const Product = require("../models/product");
Product.fetch();
exports.Home = (req, res) => {
	res.render("home", { title: "Default Homepage", navTitle: "Wellcome Homepage", products: Product.getItems() });
}