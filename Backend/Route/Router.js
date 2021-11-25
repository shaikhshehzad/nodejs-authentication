/********************* Import Router From The Express *********************/

const Express = require("express");
const Router = Express.Router();



/********************* Import The Controllers *********************/

const ProductController = require("../Controllers/ProductsController");
const UserController = require("../Controllers/UsersController");



/********************* Declare The Routes And Bind With The Controller Methods *********************/

Router.get("/products", ProductController.getAllProducts);
Router.get("/product/:ID", ProductController.getProductByID);

Router.post("/SignIn", UserController.userSignIn);
Router.post("/SignUp", UserController.userSignUp);



/********************* Export The Routes *********************/

module.exports = Router;