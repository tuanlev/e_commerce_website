import { NextFunction, Request, Response } from "express";
import SizeModel from "../models/size";
import { successResponse } from "../utils/reponseHandle";
export const createSize = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name, description, catagoryId } = req.body;
        const sizeR: any = {};
        if (name) sizeR.name = name;
        if (description) sizeR.description = description;
        if (catagoryId) sizeR.catagoryId = catagoryId;
        const sizeIntance = await SizeModel.create(
            sizeR
        );
        successResponse({ res, status: 201, message: "Size created successfully", data: sizeIntance });
    }
    catch (error) {
        next(error)
        // next(error);
    }
}

export const getSizes = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const sizes = await SizeModel.find();
        if (sizes?.length === 0) throw new Error("No sizes found");
        successResponse({ res, status: 200, message: "Sizes found", data: sizes });
    } catch (error) {
        next(error);
    }
}
export const getSizeById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { sizeId } = req.params;
        const size = await SizeModel.findById(sizeId    );
        if (!size) throw new Error("Size not found");
        successResponse({ res, status: 200, message: "Size found", data: size });
    } catch (error) {
        next(error);
    }
}
export const updateSize = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { sizeId } = req.params;
        const { name, description, catagoryId } = req.body;
        const sizeR: any = {};
        if (name) sizeR.name = name;
        if (description) sizeR.description = description;
        if (catagoryId) sizeR.catagoryId = catagoryId;
        const sizeIntance = await SizeModel.findByIdAndUpdate(sizeId, sizeR, { new: true });
        if (!sizeIntance) throw new Error("Size not found");
        successResponse({ res, status: 200, message: "Size updated successfully", data: sizeIntance });
    } catch (error) {
        next(error);
    }
}
export const deleteSize = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { sizeId } = req.params;
        const sizeIntance = await SizeModel.findByIdAndDelete(sizeId);
        if (!sizeIntance) throw new Error("Size not found");
        successResponse({ res, status: 200, message: "Size deleted successfully", data: sizeIntance });
    } catch (error) {
        next(error);
    }
}