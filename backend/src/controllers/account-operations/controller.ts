import { NextFunction, Request, Response } from "express";
import { AccountOperationsModel } from "../../models/account-operations";

export async function getAllOpsPerAccount(req: Request<{accountNumber: string;}>, res: Response, next: NextFunction) {
    try {
        const { accountNumber } = req.params;

        const allOps = await AccountOperationsModel.find({
            accountNumber
        })

        res.json(allOps.map(doc => doc.toObject()))
    } catch (error) {
        next(error)
    }
}

export async function create(req: Request<{}, {}, {
    accountNumber: string;
    type: string;
    data: {amount: number, interest?: number, payments?: number}
}>, res: Response, next: NextFunction) {
    try {
        const newOps = new AccountOperationsModel(req.body)
        await newOps.save()

        res.json(newOps.toObject())
    } catch (error) {
        next(error)
    }
}