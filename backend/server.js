import express from "express";
import bodyParser from "body-parser";
import connectDb from "./config/db.js";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import todoRoutes from "./routes/todoRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();
connectDb();
const app = express();
app.use(express.json());
// app.use(require("connect").bodyParser());
app.use("/api/user", userRoutes);
app.use("/api/todo", todoRoutes);
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(
    `Server Listening on PORT ${PORT} in ${process.env.NODE_ENV}`.cyan.underline
  )
);
