/********************* Import The Models *********************/

const ProductModel = require("../Models/ProductModel");



/********************* Export The Controller Functionality *********************/

///**************** (1) Get All The Products ****************///

exports.getAllProducts = (Request, Response) => {
    ProductModel.find().then(Result => {
        Response.status(200).json({
            message: `Product List`,
            products: Result
        })
    }).catch(Error => {
        Response.status(500).json({
            message: "Error in Database",
            error: Error
        })
    });
};


///**************** (2) Get Product By ID ****************///
exports.getProductByID = (Request, Response) => {
    const ProductID = req.params.ID;
    ProductModel.find(
        {
            _id: ProductID
        }
    ).then(Result => {
        Response.status(200).json({
            message: `Product Fetched of id ${ProductID}`,
            product: Result
        })
    }).catch(Error => {
        Response.status(500).json({
            message: "Error in Database",
            error: Error
        })
    });
};