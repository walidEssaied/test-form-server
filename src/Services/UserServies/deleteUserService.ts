import { getRepository } from "typeorm";
import { User } from "../../entity/User";

export async function deleteUserService(userId: number): Promise<void> {
  const userRepository = getRepository(User);
  const user = await userRepository.findOne({ where: { id: userId } });

  if (!user) {
    throw new Error("User not found");
  }

  await userRepository.remove(user);
}
