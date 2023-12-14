import express from "express";
import sectorRoutes from "./sectorRoutes";
import userRoutes from "./userRoutes";

const router = express();

router.use("/users", userRoutes);
router.use("/sectors", sectorRoutes);

export default router;
