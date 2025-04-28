import { NextFunction, Request, Response } from "express";
import MaterialModel from "../models/material";
import { successResponse } from "../utils/reponseHandle";

export const createMaterial = async (req:Request, res:Response,next:NextFunction) => {
    try {
        const { name, description } = req.body;
        const newMaterial = new MaterialModel({ name, description });
        await newMaterial.save();
        successResponse({res, status:200, data:newMaterial,message: "Create material successfully"});
    } catch (error) {
        next(error);
}