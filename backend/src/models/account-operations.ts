import mongoose from "mongoose";

export interface AccountOperations {
    id: string;
    accountNumber: string;
    type: string;
    data: {amount: number, interest?: number, payments?: number}
}

const AccountOperationsSchema = new mongoose.Schema<AccountOperations>({
    accountNumber: String,
    type: {
        type: String,
        enum: ['withdraw', 'deposit', 'loan']
    },
    data: mongoose.Schema.Types.Mixed
}, {
    toObject: {
        transform(doc, ret, options) {
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v;
        },
    }
})

export const AccountOperationsModel = mongoose.model<AccountOperations>('AccountOperations', AccountOperationsSchema, 'accountOperations');