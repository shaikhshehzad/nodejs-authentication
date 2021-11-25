/********************* Import The Mongoose Library *********************/

const Mongoose = require("mongoose");



/********************* Create The Schema *********************/

const UserSchema = Mongoose.Schema;

const UserSchemaObject = new UserSchema(

    ///**************** Declare The Fields Present In The Collection ****************///

    {

        FirstName: {
            type: String,
            required: true
        },

        LastName: {
            type: String,
            required: true
        },

        Email: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            lowercase: true
        },

        Password: {
            type: String,
            required: true
        },


        MobileNumber: {
            type: Number,
            required: true,
            unique: true
        },

        isAdmin: {
            type: Boolean,
            required: true,
            default: false
        }

    }

);



/********************* Create The Model From Schema And Connect To The MongoDB Collection And Export The Model *********************/

module.exports = Mongoose.model("UsersModel", UserSchemaObject, "Users");

