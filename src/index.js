import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();

import authRoutes from "./routes/Auth.js";
import transactionRoutes from "./routes/Transactions.js";

app.use(express.json());
app.use(cors());
app.use(authRoutes);
app.use(transactionRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running in port ${port}`));