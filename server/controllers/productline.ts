import { NextFunction, Request, Response } from "express";
import ProductLineModel from "../models/productline";
import { successResponse } from "../utils/reponseHandle";
import { RequestWithFile } from "../utils/fileHandle";
export const createProductLine = async (req: RequestWithFile, res: Response, next: NextFunction) => {
    try {
        const img: string[] = req.files?.map(file => {
            const fullPath = file.path;
            const idx = fullPath.indexOf('asset');
            const publicPath = '/' + fullPath.slice(idx).replace(/\\/g, '/');
            ; return publicPath
        });
        const { name, description } = req.body;
        const productLineR:any = {img}
        if (name) productLineR.name = name;
        if (description) productLineR.description = description;
        const productLineInstance = await ProductLineModel.create(productLineR);
        if (!productLineInstance) throw new Error("Product line creation failed");
        successResponse({ res, status: 201, message: "Product line created successfully", data: productLineInstance });
    }
    catch (error) {
        next(error);
    }
}
const getProductLineById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const productLineId = req.params.productline_id;
        const productLineResult = await ProductLineModel.findById(productLineId);
        if (!productLineResult) throw new Error("Product line not found");
        successResponse({ res, status: 200, message: "Product line found", data: productLineResult });
    } catch (error) {
        next(error);
    }
}
const getAllProductLines = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const productLines = await ProductLineModel.find();
        if (productLines?.length === 0) throw new Error("No product lines found");
        successResponse({ res, status: 200, message: "Product lines found", data: productLines });
    } catch (error) {
        next(error);
    }
}
const updateProductLine = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const productLine_Id = req.params.productline_id;
        const { name, description } = req.body;
        const productlineR:any = {};
        if (name) productlineR.name = name;
        if (description) productlineR.description = description;
        const productLineResult = await ProductLineModel.findByIdAndUpdate(productLine_Id, productlineR, { new: true });
        if (!productLineResult) throw new Error("Product line not found");
        successResponse({ res, status: 200, message: "Product line updated", data: productLineResult });
    } catch (error) {
        next(error);
    }
}
export const deleteProductLine = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const productLineId = req.params.productline_id;
        const productLineResult = await ProductLineModel.findByIdAndDelete(productLineId);
        if (!productLineResult) throw new Error("Product line not found");
        successResponse({ res, status: 200, message: "Product line deleted", data: productLineResult });
    } catch (error) {
        next(error);
    }
}