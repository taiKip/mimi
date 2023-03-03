import express, { NextFunction, Request, Response } from "express";
import UnitController from "../controllers/unit.controller";

const router = express.Router();
const controller = new UnitController();
router.get("/", async (req: Request, res: Response) => {
  const response = await controller.getUnits();
  return res.send(response);
});

router.post("/", async (req: Request, res: Response) => {
  const response = await controller.createUnit(req.body);
  return res.send(response);
});

router.post("/:id/maintenance", async (req: Request, res: Response) => {
  const response = await controller.createMaintenanceRequest(
    req.params.id,
    req.body
  );
  return res.send(response);
});
router.put("/:id/assignuser", async (req: Request, res: Response) => {
  const response = await controller.assignUnitUser(
    req.params.id,
    req.body.userId
  );
  return res.send(response);
});
router.get("/:id", async (req: Request, res: Response) => {
  const response = await controller.getUnit(req.params.id);
  if (!response) res.status(404).send({ message: "Unit not found" });

  return res.send(response);
});

router.delete("/:id", async (req: Request, res: Response) => {
  const response = await controller.deleteUnit(req.params.id);
  return res.send(response);
});

export default router;
