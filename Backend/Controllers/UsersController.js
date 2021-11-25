/********************* Import The Models *********************/

const UsersModel = require("../Models/UserModel");
const bcrypt = require("bcrypt");



/********************* Export The Controller Functionality *********************/

///**************** (1) Login ****************///

exports.userSignIn = async (Request, Response) => {

    const {
        Email,
        Password
    } = Request.body;

    const User = await UsersModel.findOne({ Email: Email })

    if (User) {
        const HashedPassword = await bcrypt.compare(Password, User.Password);
        if (HashedPassword == true) {
            Response.status(200).json(
                {
                    message: "User Logged In Successfully",
                    isLoggedIn: true,
                    FirstName: User.FirstName,
                    LastName: User.LastName,
                    Email: User.Email,
                    MobileNumber: User.MobileNumber,
                    isAdmin: User.isAdmin
                }
            );
        } else {
            Response.status(400).json(
                {
                    message: "Please Enter the Correct Email and Password",
                    isLoggedIn: false,
                }
            );
        }
    } else {
        Response.status(500).json(
            {
                message: "Error In DataBase",
                error: Error
            }
        );
    }
};


///**************** (2) SignUp ****************///

exports.userSignUp = async (Request, Response) => {

    const {
        FirstName,
        LastName,
        Email,
        Password,
        MobileNumber,
        isAdmin
    } = Request.body;



    /////**************** Create a new Object of User Model Class ****************/////

    const UserObject = new UsersModel(
        {
            FirstName: FirstName,
            LastName: LastName,
            Email: Email,
            Password: await bcrypt.hash(Password, 10),
            MobileNumber: MobileNumber,
            isAdmin: isAdmin
        }
    );

    /////**************** Call for the Save Method for this Object ****************/////

    UserObject.save().then(Result => {
        Response.status(200).json(
            {
                message: "Account Created Successfully",
                FirstName: Result.FirstName,
                LastName: Result.LastName,
                Email: Result.Email,
                MobileNumber: Result.MobileNumber
            }
        );
    }).catch(Error => {
        Response.status(500).json(
            {
                message: "Error In DataBase",
                error: Error
            }
        );
    });
};