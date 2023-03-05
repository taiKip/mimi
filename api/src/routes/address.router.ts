import express, { Request, Response } from "express";
import AddressController from "../controllers/address.controller";

const router = express.Router();
const controller = new AddressController();
router.get("/", async (req: Request, res: Response) => {
  const response = await controller.getAddresses();
  return res.send(response);
});

router.post("/", async (req: Request, res: Response) => {
  const response = await controller.createAddress(req.body);
  return res.send(response);
});

router.get("/:id", async (req: Request, res: Response) => {
  const response = await controller.getAddress(req.params.id);
  if (!response) res.status(404).send({ message: "Address not found" });

  return res.send(response);
});

router.delete("/:id", async (req: Request, res: Response) => {
  const response = await controller.deleteAddress(req.params.id);
  return res.send(response);
});

export default router;
