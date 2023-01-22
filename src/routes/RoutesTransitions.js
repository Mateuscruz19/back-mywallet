import { Router } from "express";
import {
  createTransaction,
  findTransactions,
} from "../controllers/transactions.controllers.js";
import { authRoutesValidation } from "../middlewares/authValidation.middleware.js";
import { transactionSchemaValidation } from "../middlewares/transactionSchemaValidation.middleware.js";

const router = Router();

router.use(authRoutesValidation);
router.post("/transactions", transactionSchemaValidation, createTransaction);
router.get("/transactions", findTransactions);

export default router;
