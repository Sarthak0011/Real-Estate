import User from "../models/userModel.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const authController = async (req, res, next) => {
    const {username, email, password} = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({username, email, password: hashedPassword});
    try{
        await newUser.save();
        res.status(201).json({"message" : "User created"});
    }
    catch(error){
        // next(errorHandler(500, "Custom Error"));
        next(error);
    }
};