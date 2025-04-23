import { create } from "ts-node";
import { uploadFiles,RequestWithFile } from "../utils/fileHandle";
import { NextFunction, Request, Response } from "express";
import CollectionModel from "../models/collection";
import { successResponse } from "../utils/reponseHandle";

const collectionController = {
    createCollection: [uploadFiles('imageTheme'),
    async (req:RequestWithFile, res:Response, next:NextFunction) => {
        try {
            const { name, description } = req.body;
            const img:string[] = req.files?.map(file => file.path);
            const collectionIntance = await CollectionModel.create({
                name,
                description,
                img
            })
            successResponse({
                res,
                status:201,
                data:collectionIntance
            })
        } catch (error) {
            next(error);
        }
    }],
}