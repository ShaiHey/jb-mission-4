import { Router } from "express";
import paramsValidation from "../middlewares/params-validation";
import validation from "../middlewares/validation";
import { getOpsValidator, newOpsValidator } from "../controllers/account-operations/validator";
import { create, getAllOpsPerAccount } from "../controllers/account-operations/controller";

const accountOpsRouter = Router()

accountOpsRouter.get('/:accountNumber', paramsValidation(getOpsValidator), getAllOpsPerAccount)
accountOpsRouter.post('/', validation(newOpsValidator), create)

export default accountOpsRouter;