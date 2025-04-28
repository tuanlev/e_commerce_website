import { NextFunction, Request, Response } from "express";
import MaterialModel from "../models/material";
import { successResponse } from "../utils/reponseHandle";

export const createMaterial = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name, description } = req.body;
        const newMaterial = new MaterialModel({ name, description });
        await newMaterial.save();
        successResponse({ res, status: 200, data: newMaterial, message: "Create material successfully" });
    } catch (error) {
        next(error);
    }
}
export const getAllMaterials = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const materials = await MaterialModel.find();
        successResponse({ res, status: 200, data: materials, message: "Get all materials successfully" });
    } catch (error) {
        next(error);
    }
}
export const updateMaterial = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const { name, description } = req.body;
        const updateData:any = {};
        if ( name ) updateData.name = name;
        if ( description ) updateData.description = description;
        const updatedMaterial = await MaterialModel.findByIdAndUpdate(id, updateData , { new: true });
        if (!updatedMaterial) {
            throw new Error("Material not found");
        }
        successResponse({ res, status: 200, data: updatedMaterial, message: "Update material successfully" });
    } catch (error) {
        next(error);
    }
}
export const deleteMaterial = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { material_id } = req.params;
        const deletedMaterial = await MaterialModel.findByIdAndDelete(material_id);
        if (!deletedMaterial) {
            return res.status(404).json({ message: "Material not found" });
        }
        successResponse({ res, status: 200, data: deletedMaterial, message: "Delete material successfully" });
    } catch (error) {
        next(error);
    }
}