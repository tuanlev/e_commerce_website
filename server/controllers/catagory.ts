import { NextFunction, Request, Response } from "express";
import CatagoryModel from "../models/catagory";
import { successResponse } from "../utils/reponseHandle";
export const createCatagory = async (req:Request, res: Response, next: NextFunction) => {
    try {
        const { name, description } = req.body;
        const catagoryIntance = await CatagoryModel.create({
            name,
            description
        })
        successResponse({
            res,
            status: 201,
            data: catagoryIntance
        })
    } catch (error) {
        next(error);
    }
}
export const getCatagories = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const catagories = await CatagoryModel.find();
        if (catagories?.length === 0) throw new Error("No catagories found");
        successResponse({ res, status: 200, message: "Catagories found", data: catagories });
    } catch (error) {
        next(error);
    }
}