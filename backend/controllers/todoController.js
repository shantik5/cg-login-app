import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";
import User from "../models/userModel.js";
import axios from "axios";

// @desc    Auth user & get token
// @route   POST /api/todo
// @access  Public
const list = asyncHandler(async (req, res) => {
  const { data } = await axios.get("http://jsonplaceholder.typicode.com/todos");
  if (data) {
    console.log(data);
    res.json(data);
  }
});

export { list };
