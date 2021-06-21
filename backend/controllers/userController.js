import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";
import User from "../models/userModel.js";

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
const login = asyncHandler(async (req, res) => {
  const { userName, password } = req.body;
  console.log(
    "Exec login API User Name : " + userName + ", password: " + password
  );
  const users = await User.find();
  console.log("User Count" + users.length);
  const authUser = users.filter(
    (eu) => eu.userName === userName && eu.password === password
  );

  if (authUser) {
    let token = "";
    token = generateToken(authUser._id);
    console.log("Auth User : " + token);
    res.json({
      _id: authUser._id,
      userName: authUser.userName,
      password: authUser.password,
      token: token,
    });
  } else {
    res.status(401);
    throw new Error("Invalid Credentails");
  }
});

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const create = asyncHandler(async (req, res) => {
  console.log("Req Body :--> " + req.body);
  const { userName, password } = req.body;

  const userExists = await User.findOne({ userName });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    userName,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      userName: user.name,
      password: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
const hello = asyncHandler(async (req, res) => {
  res.json({ mesg: "Hello from Controller" });
});

export { login, create, hello };
