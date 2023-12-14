import { UserSchema } from "./../Schemas/UserSchema";
import { createUserService, deleteUserService, listUsersService, updateUserService } from "./../Services/UserServies";

import { Request, Response } from "express";
import { getUserBytId } from "../Services/UserServies/getUserBytId";

export async function CreateUser(
  req: Request,
  res: Response
): Promise<void> {
  try {
    await UserSchema.validate(req.body);
    const { name, agree_to_terms, sector } = req.body;
    const user = await createUserService(name, agree_to_terms, sector);
    res.status(201).json(user);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

export async function UpdateUser(
  req: Request,
  res: Response
): Promise<void> {
  try {
    await UserSchema.validate(req.body);

    const userId = parseInt(req.params.id, 10);
    const { name, agree_to_terms, sector } = req.body;
    const updatedUser = await updateUserService(
      userId,
      name,
      agree_to_terms,
      sector
    );

    res.status(200).json(updatedUser);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

export async function DeleteUser(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const userId = parseInt(req.params.id, 10);
    await deleteUserService(userId);

    res.status(204).end();
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

export async function ListUsers(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const users = await listUsersService();
    res.status(200).json(users);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

export async function getUserById(req: Request, res: Response): Promise<void> {
  try {
    const userId = parseInt(req.params.id, 10);
    const user = await getUserBytId(userId);
    res.status(200).json(user);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}
