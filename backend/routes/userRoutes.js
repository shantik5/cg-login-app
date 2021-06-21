import express from "express";
const router = express.Router();
import { login, create, hello } from "../controllers/userController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").post(create);
router.route("/").get(hello);
router.route("/login").post(login);

export default router;
