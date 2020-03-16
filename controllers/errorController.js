exports.err404 = (req, res) => {
	res.status(404);
	res.render("404",{title:"Page Not Found",navTitle:"Page Not Found"})
};