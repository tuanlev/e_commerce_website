import { NextFunction, Request, Response } from "express"
import ColorModel from "../models/color";
import { successResponse } from "../utils/reponseHandle";

export const createColor = async (req: Request, res: Response,next:NextFunction) => {
    try {
        const {hexCode} = req.body;
        const colorIntance = await ColorModel.create({
            hexCode
        });    
    successResponse({res, status:201, message:"Color created successfully", data: colorIntance});
    } 
    catch (error) {
        next(error);
    }
}
export const getColorById = async (req:Request, res:Response, next:NextFunction) => {
    try {
        const colorId = req.params.color_id;
        const colorResult = await ColorModel.findById(colorId);
        if (!colorResult) throw new Error("Color not found");        
        successResponse({res, status:200, message:"Color found", data: colorResult});
    } catch (error) {
        next(error);
    }
}
export const getAllColors = async (req:Request, res:Response, next:NextFunction) => {
    try {
        const colors = await ColorModel.find();
        if (colors?.length === 0) throw new Error("No colors found");
        successResponse({res, status:200, message:"Colors found", data: colors});
    } catch (error) {
        next(error);
    }
}
export const updateColor = async (req:Request, res:Response, next:NextFunction) => {
    try {
        const colorId = req.params.color_id;
        const { hexCode } = req.body;
        const colorResult = await ColorModel.findByIdAndUpdate(colorId, {
            hexCode,
        });
        if (!colorResult) throw new Error("Color not found");
        successResponse({res, status:200, message:"Color updated", data: colorResult});
    } catch (error) {
        next(error);
    }
}
export const deleteColor = async (req:Request, res:Response, next:NextFunction) => {
    try {
        const colorId = req.params.color_id;
        const colorResult = await ColorModel.findByIdAndDelete(colorId);
        if (!colorResult) throw new Error("Color not found");
        successResponse({res, status:200, message:"Color deleted", data: colorResult});
    } catch (error) {
        next(error);
    }
}
