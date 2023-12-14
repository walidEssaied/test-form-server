import { getRepository } from "typeorm";
import { User } from "../../entity/User";

interface UsersListResponse {
  data: {
    items: User[];
    total: number;
  };
}

export async function listUsersService(): Promise<UsersListResponse> {
  try {
    const userRepository = getRepository(User);
    const users = await userRepository
    .createQueryBuilder('user')
    .leftJoinAndSelect('user.sector', 'sector')
    .getMany();

    return { data: { items: users, total: users.length } };
  } catch (error: any) {
    throw new Error(`Error fetching users: ${error.message}`);
  }
}
