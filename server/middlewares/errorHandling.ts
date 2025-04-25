import { ErrorRequestHandler, Request, Response } from "express";
import { errorResponse } from "../utils/reponseHandle";

export const errorHandling = async (err:Error,req:Request,res:Response) => {
    errorResponse({
        res,
        message:err.message
    })
}