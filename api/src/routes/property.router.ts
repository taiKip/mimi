import express, { NextFunction, Request, Response } from "express";
import PropertyController from "../controllers/property.controller";

const router = express.Router();
const controller = new PropertyController();
router.get("/", async (req: Request, res: Response) => {
  const response = await controller.getProperties();
  return res.send(response);
});

router.post("/", async (req: Request, res: Response) => {
  const response = await controller.createProperty(req.body);
  return res.send(response);
});

router.post("/:id/units", async (req: Request, res: Response) => {
  const response = await controller.createPropertyUnit(req.params.id, req.body)
  return res.send(response)
})
router.post("/:id/address", async (req: Request, res: Response) => {
  const response = await controller.createPropertyAddress(req.params.id, req.body);
  return res.send(response);
});
router.get("/:id", async (req: Request, res: Response) => {
  const response = await controller.getProperty(req.params.id);
  if (!response) res.status(404).send({ message: "Property not found" });

  return res.send(response);
});

router.delete("/:id", async (req: Request, res: Response) => {
  const response = await controller.deleteProperty(req.params.id);
  return res.send(response);
});

export default router;
