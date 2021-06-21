import express from "express";
const router = express.Router();
import { list } from "../controllers/todoController.js";
import { protect } from "../middleware/authMiddleware.js";
// PROTECTED ROUTE
// router.route("/").get(protect, list);
router.route("/").get(list);

export default router;
