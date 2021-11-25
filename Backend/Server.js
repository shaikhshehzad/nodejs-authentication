/********************* Import The Required Pakages *********************/

const Express = require("express");
const BodyParser = require("body-parser");
const Mongoose = require("mongoose");



/********************* Import The Routes *********************/

const Router = require("./Route/Router");



/********************* Initialise The Libraries *********************/

const App = Express();
App.use(BodyParser.json());
App.use(Express.urlencoded({ extended: true }));



/********************* Handle The CORS *********************/

App.use((request, response, next) => {
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    response.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});



/********************* Start Using The Routes *********************/

App.use("/", Router);



/********************* Declare The PORT *********************/

const PORT = process.env.PORT || 5000;



/********************* Connect To MongoDB *********************/

Mongoose.connect("mongodb+srv://UmarFarooque:MyServer2021@cluster0.t3sop.mongodb.net/MartOcean?retryWrites=true&w=majority",
    {

        useNewUrlParser: true,

        useUnifiedTopology: true

    }).then(Success => {

        console.log("Connected to MongoDB");


        ///**************** Start The Server ****************///

        App.listen(PORT, () => {

            console.log(`Server is listening at Port : ${PORT}`)

        });

    }).catch(Error => {

        console.log("Connection Error" + Error);

    });
