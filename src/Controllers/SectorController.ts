import { Request, Response } from "express";
import { listSectorsService } from "../Services/SectorServices/listSectorsService";
import { seedSectorsService } from "../Services/SectorServices/seedSectorsService";

export async function ListSectors(req: Request, res: Response): Promise<void> {
  try {
    const users = await listSectorsService();
    res.status(200).json(users);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

export async function SeedSectors(req: Request, res: Response): Promise<void> {
  try {
    await seedSectorsService();
    res.send("Sectors seeded successfully");
  } catch (error) {
    res.status(500).send("Error seeding sectors");
  }
}
