import { getRepository } from "typeorm";
import { Sector } from "../../entity/Sector";

interface SectorListResponse {
  data: {
    items: Sector[];
    total: number;
  };
}

export async function listSectorsService(): Promise<SectorListResponse> {
  try {
    const sectRepository = getRepository(Sector);
    const sectors = await sectRepository.find();
    return { data: { items: sectors, total: sectors.length } };
  } catch (error: any) {
    throw new Error(`Error fetching sectors: ${error.message}`);
  }
}
