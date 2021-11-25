/********************* Import The Mongoose Library *********************/

const Mongoose = require("mongoose");



/********************* Create The Schema *********************/

const ProductSchema = Mongoose.Schema;

const ProductSchemaObject = new ProductSchema(

    ///**************** Declare The Fields Present In The Collection ****************///

    {
        name: {
            type: String,
            required: true,
        },

        category: {
            type: String,
            required: true,
        },

        image: {
            type: String,
            required: true,
        },

        price: {
            type: Number,
            required: true,
        },

        countInStock: {
            type: Number,
            required: true,
        },

        brand: {
            type: String,
            required: true,
        },

        rating: {
            type: Number,
            required: true,
        },

        numReviews: {
            type: Number,
            required: true,
        },

        description: {
            type: String,
            required: true,
        }
    }

);




/********************* Create The Model From Schema And Connect To The MongoDB Collection And Export The Model *********************/

module.exports = Mongoose.model("ProductModel", ProductSchemaObject, "Products");