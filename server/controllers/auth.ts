import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import {validateEmail, validatePassword, validatePhoneNumber, validateUsername} from "../utils/validations";
import  {default as AccountModel}  from "../models/account";
import { successResponse } from "../utils/reponseHandle";
import jwt from "jsonwebtoken";
const authController = {
    register: async (req:Request, res:Response,next:NextFunction) => {
        try {
        const accountIntance = {
            userName: validateUsername(req.body.userName),
            userPw: validatePassword( req.body.userPw),
            email: validateEmail( req.body.email),
            phoneNumber: validatePhoneNumber(req.body.phoneNumber),
            role: req.body.role || 'customer'
        }
       const accountResponse = AccountModel.create(accountIntance);
       if (accountResponse) {
            const token = jwt.sign({ id: accountResponse._id }, process.env.JWT_SECRET as string, { expiresIn: '1h' });
            res.set('authorization', `Bearer ${token}`);
            res.set('access-control-expose-headers', 'authorization');
            res.set('access-control-allow-origin', '*');
            res.set('access-control-allow-headers', 'authorization, content-type');
            successResponse({res, status:201, message:"Account created successfully", data:accountResponse});
       }
       else {
            res.status(400).json({message: "Account creation failed"});
       }
    } catch (error) {
        next(error)
    }},
    login: async (req:Request, res:Response,next:NextFunction) => {
        try {
            const { userName, userPw } = req.body;
            const accountResponse = await AccountModel.findOne({userName, userPw});
            if (accountResponse) {
                const token = jwt.sign({ id: accountResponse._id }, process.env.JWT_SECRET as string, { expiresIn: '1h' });
                res.set('authorization', `Bearer ${token}`);
                res.set('access-control-expose-headers', 'authorization');
                res.set('access-control-allow-origin', '*');
                res.set('access-control-allow-headers', 'authorization, content-type');            
                successResponse({res, status:200, message:"Login successfully", data:accountResponse});
            }
            else {
                res.status(401).json({message: "Invalid username or password"});
            }
        } catch (error) {
            next(error)
        }
    },
    logout: async (req:Request, res:Response,next:NextFunction) => {
        try {
            const { userName } = req.body;
            const accountReosponse = await AccountModel.findOne({userName});
            if (accountReosponse) {
                successResponse({res, status:200, message:"Logout successfully", data:{}});
            }
            else {
                res.status(401).json({message: "Invalid username"});
            }
        } catch (error) {
            next(error)
        }
    }
    
}
export default authController;