const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
app.set("view engine","ejs");
app.set("views","views"); // thư mục chưa view
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,"public"))); //Đường dẫn đến public
//Admin
const adminRouter = require("./routes/admin");
app.use("/admin",adminRouter);
//Shop
const shopRouter = require("./routes/shop");
app.use(shopRouter);
//Default Homepage
const homeController = require("./controllers/homeController");
app.get("/",homeController.Home);
//app.get("/",(req,res)=>{
//	res.send("<h1>Wellcome to Express.js</h1>");
//});
//404
const errorController = require("./controllers/errorController")
app.use(errorController.err404);
//Start Server
http.createServer(app).listen(3000);
console.log("Server starting....");