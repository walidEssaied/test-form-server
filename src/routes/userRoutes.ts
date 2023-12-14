import express from "express";
import {
  CreateUser,
  DeleteUser,
  getUserById,
  ListUsers,
  UpdateUser,
} from "../Controllers/UserController";

const userRoutes = express();

userRoutes.post("/", CreateUser);
userRoutes.put("/:id", UpdateUser);
userRoutes.delete("/:id", DeleteUser);
userRoutes.get("/", ListUsers);
userRoutes.get("/:id", getUserById);

export default userRoutes;
