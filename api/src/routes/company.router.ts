import express, { NextFunction, Request, Response } from "express";
import CompanyController from "../controllers/company.controller";

const router = express.Router();
const controller = new CompanyController();
router.get("/", async (req: Request, res: Response) => {
  const response = await controller.getCompanies();
  return res.send(response);
});

router.post("/", async (req: Request, res: Response) => {
  const response = await controller.createCompany(req.body);
  return res.send(response);
});

router.post("/:id/properties", async (req: Request, res: Response) => {
  const response = await controller.createCompanyProperty(req.params.id, req.body);
  return res.send(response);
});
router.get("/:id", async (req: Request, res: Response) => {
  const response = await controller.getCompany(req.params.id);
  if (!response) res.status(404).send({ message: "Company not found" });

  return res.send(response);
});

router.delete("/:id", async (req: Request, res: Response) => {
  const response = await controller.deleteCompany(req.params.id);
  return res.send(response);
});

export default router;
