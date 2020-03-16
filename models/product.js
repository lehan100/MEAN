const fs = require("fs");
const path = require("path");
let products = [];
const jsonData = path.join(__dirname, "../", "data", "product.json");
module.exports = class Product {
	constructor(name, price) {
		this.name = name;
		this.price = price;
	}
	static fetch() {
		if (fs.existsSync(jsonData)) {
			fs.readFile(jsonData, (err, data) => {
				if (err) {
					console.log(err);
				} else {
					products = JSON.parse(data);
				}
			})
		}
	}
	save() {
		products.push({ name: this.name, price: this.price });
		fs.writeFile(jsonData, JSON.stringify(products), error => {
			console.log(error);
		});
	}
	static getItems() {
		return products;
	}
}
