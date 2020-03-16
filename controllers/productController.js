const Product = require("../models/product");
Product.fetch();
exports.addProduct = (req, res) => {
	res.render("admin", { title: "Add product", navTitle: "Wellcome page Add product" });
}
exports.postProduct = (req, res) => {
	//	products.push({ name: req.body.name, price: req.body.price });
	//	console.log(products);
	new Product(req.body.name, req.body.price).save();
	res.redirect("/shop");
}