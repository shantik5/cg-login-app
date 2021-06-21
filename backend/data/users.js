import bcrypt from "bcryptjs";

const users = [
  {
    name: "shanti",
    password: bcrypt.hashSync("password", 10),
  },
  {
    name: "kspriya",
    password: bcrypt.hashSync("password", 10),
  },
];

export default users;
