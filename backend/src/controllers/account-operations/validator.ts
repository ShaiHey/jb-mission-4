import Joi from "joi";

export const getOpsValidator = Joi.object({
    accountNumber: Joi.string().min(4).required()
})

export const newOpsValidator = Joi.object({
    accountNumber: Joi.string().min(4).required(),
    type: Joi.string().valid('withdraw', 'deposit', 'loan').required(),
    data: Joi.object({
        amount: Joi.number().min(1).required(),
        interest: Joi.number().min(0).optional(),
        payments: Joi.number().min(0).optional(),
    })
})