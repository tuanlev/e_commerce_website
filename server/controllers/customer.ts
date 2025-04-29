import { NextFunction, Request, Response } from "express";
import Customer from "../models/customer";
import { successResponse } from "../utils/reponseHandle";

export const createCustomer = async (req: Request, res: Response,next: NextFunction) => {
    try {
        const {fullname,
            email,
            phone,
            address,
            accoutID } = req.body;
        const customerInstance = await Customer.create({
            fullname,
            email,
            phone,
            address,
            accoutID
        })
        successResponse({
            res,
            status: 201,
            data: customerInstance
        })
    } catch (error) {
        next(error);
    }
}
export const getCustomers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const customers = await Customer.find();
        if (customers?.length === 0) throw new Error("No customers found");
        successResponse({ res, status: 200, message: "Customers found", data: customers });
    } catch (error) {
        next(error);
    }
}
export const getCustomerById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { customerId } = req.params;
        const customer = await Customer.findById(customerId);
        if (!customer) throw new Error("Customer not found");
        successResponse({ res, status: 200, message: "Customer found", data: customer });
    } catch (error) {
        next(error);
    }
}
export const updateCustomer = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { customerId } = req.params;
        const { name, email, password } = req.body;
        const customerInstance = await Customer.findByIdAndUpdate(customerId, {
            name,
            email,
            password
        }, { new: true });
        if (!customerInstance) throw new Error("Customer not found");
        successResponse({ res, status: 200, message: "Customer updated successfully", data: customerInstance });
    } catch (error) {
        next(error);
    }
}
export const deleteCustomer = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { customerId } = req.params;
        const customerInstance = await Customer.findByIdAndDelete(customerId);
        if (!customerInstance) throw new Error("Customer not found");
        successResponse({ res, status: 200, message: "Customer deleted successfully", data: customerInstance });
    } catch (error) {
        next(error);
    }
}