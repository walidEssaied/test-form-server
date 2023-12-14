import { getRepository } from "typeorm";
import { User } from "../../entity/User";

export async function getUserBytId(id: number): Promise<User[]> {
  try {
    const userRepository = getRepository(User);
    const users = await userRepository.find({ where: { id } });
    return users;
  } catch (error: any) {
    throw new Error(`Error fetching users: ${error.message}`);
  }
}
