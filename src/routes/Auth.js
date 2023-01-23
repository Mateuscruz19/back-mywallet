import { Router } from "express";
import { signIn, signUp } from "../controllers/ControllerAuth.js";
import { signInBodyValidation, userSchemaValidation,} from "../middlewares/MiddlewareAuth.js";

const router = Router();

router.post("/sign-up", userSchemaValidation, signUp);
router.post("/sign-in", signInBodyValidation, signIn);

export default router;
