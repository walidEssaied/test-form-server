import { getRepository } from "typeorm";
import { Sector } from "../../entity/Sector";
import { User } from "../../entity/User";

export async function updateUserService(
  userId: number,
  name: string,
  agree_to_terms: boolean,
  sector_id: number
): Promise<User> {
  const userRepository = getRepository(User);
  const sectorRepository = getRepository(Sector);

  const user = await userRepository.findOne({ where: { id: userId } });

  if (!user) {
    throw new Error("User not found");
  }

  user.name = name;
  user.agree_to_terms = agree_to_terms;

  const sector = await sectorRepository.findOne({ where: { id: sector_id } });

  if (!sector) {
    throw new Error("Sector not found");
  }

  user.sector = sector;
  return userRepository.save(user);
}
