import { create } from "ts-node";
import { uploadFiles, RequestWithFile } from "../utils/fileHandle";
import { NextFunction, Request, Response } from "express";
import CollectionModel from "../models/collection";
import { successResponse } from "../utils/reponseHandle";

export const createCollection: Array<any> = [uploadFiles('files'),
async (req: RequestWithFile, res: Response, next: NextFunction) => {
    try {
        console.log(req.body);
        const { name, description } = req.body;
        const img: string[] = req.files?.map(file => {
            const fullPath = file.path;
            const idx = fullPath.indexOf('asset');
            const publicPath = '/' + fullPath.slice(idx).replace(/\\/g, '/');
            ; return publicPath
        });
        const collectionIntance = await CollectionModel.create({
            name,
            description,
            img
        })
        successResponse({
            res,
            status: 201,
            data: collectionIntance
        })
    } catch (error) {
        next(error);
    }
}]

export const getCollectionById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const collectionId = req.params.collection_id;
        const collectionResult = await CollectionModel.findById(collectionId);
        if (!collectionResult) throw new Error("Collection not found");
        successResponse({ res, status: 200, message: "Collection found", data: collectionResult });

    } catch (error) {
        next(error);
    }
}
export const getAllCollections = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const collections = await CollectionModel.findAllCollections();
        if (collections?.length === 0) throw new Error("No collections found");
        successResponse({ res, status: 200, message: "Collections found", data: collections });
    } catch (error) {
        next(error);
    }
}

const updateCollection = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const collectionId = req.params.collection_id;
        const { name, description } = req.body;
        const collectionResult = await CollectionModel.findByIdAndUpdate(collectionId, {
            name,
            description,
        });
        if (!collectionResult) throw new Error("Collection not found");
        successResponse({ res, status: 200, message: "Collection updated", data: collectionResult });
    } catch (error) {
        next(error);
    }
}
const deleteCollection = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const collectionId = req.params.collection_id;
        const collectionResult = await CollectionModel.findByIdAndDelete(collectionId);
        if (!collectionResult) throw new Error("Collection not found");
        successResponse({ res, status: 200, message: "Collection deleted", data: collectionResult });
    } catch (error) {
        next(error);
    }
}