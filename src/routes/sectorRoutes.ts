import express from "express";
import { ListSectors, SeedSectors } from "../Controllers/SectorController";

const sectorRoutes = express.Router();

sectorRoutes.get("/", ListSectors);
sectorRoutes.get("/seed-sectors", SeedSectors);

export default sectorRoutes;
