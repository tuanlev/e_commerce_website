import { NextFunction, Request, Response } from "express";
import ProductModel from "../models/product";
import { successResponse } from "../utils/reponseHandle";

export const createProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name, description, price, catagoryId, sizeId, collectionId,details } = req.body;
        const productIntance = await ProductModel.create({
            name,
            description,
            price,
            catagoryId,
            sizeId,
            collectionId,
            details
        })
        successResponse({
            res,
            status: 201,
            data: productIntance
        })
    } catch (error) {
        next(error);
    }
}
export const getProducts = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const products = await ProductModel.find().populate("catagoryId").populate("sizeId").populate("collectionId");
        if (products?.length === 0) throw new Error("No products found");
        successResponse({ res, status: 200, message: "Products found", data: products });
    } catch (error) {
        next(error);
    }
}   
const getProductById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { productId } = req.params;
        const product = await ProductModel.findById(productId).populate("catagoryId").populate("sizeId").populate("collectionId");
        if (!product) throw new Error("Product not found");
        successResponse({ res, status: 200, message: "Product found", data: product });
    } catch (error) {
        next(error);
    }
}
export const updateProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { productId } = req.params;
        const { name, description, price, catagoryId, sizeId, collectionId,details } = req.body;
        const productIntance = await ProductModel.findByIdAndUpdate(productId, {
            name,
            description,
            price,
            catagoryId,
            sizeId,
            collectionId,
            details
        }, { new: true });
        if (!productIntance) throw new Error("Product not found");
        successResponse({ res, status: 200, message: "Product updated successfully", data: productIntance });
    } catch (error) {
        next(error);
    }
}
export const deleteProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { productId } = req.params;
        const productIntance = await ProductModel.findByIdAndDelete(productId);
        if (!productIntance) throw new Error("Product not found");
        successResponse({ res, status: 200, message: "Product deleted successfully", data: productIntance });
    } catch (error) {
        next(error);
    }
}

export const createProductDetails = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { productId } = req.params;
        const { color, size, quantity } = req.body;
        const productIntance = await ProductModel.findByIdAndUpdate(productId, {
            $push: {
                details: {
                    color,
                    size,
                    quantity
                }
            }
        }, { new: true });  
        if (!productIntance) throw new Error("Product not found");
        successResponse({ res, status: 200, message: "Product details created successfully", data: productIntance });
    } catch (error) {
        next(error);
    }   
}