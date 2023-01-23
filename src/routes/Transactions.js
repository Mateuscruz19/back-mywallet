import { Router } from "express";
import { createTransaction, findTransactions} from "../controllers/ControllerTransactions.js";
import { authRoutesValidation } from "../middlewares/MiddlewareAuth.js"
import { transactionSchemaValidation } from "../middlewares/MiddlewareTransaction.js";


const router = Router();

router.use(authRoutesValidation);
router.post("/transactions", transactionSchemaValidation, createTransaction);
router.get("/transactions", findTransactions);

export default router;
