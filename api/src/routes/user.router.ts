import express, { NextFunction, Request, Response } from 'express'
import UserController from '../controllers/user.controller'

const router = express.Router();
const controller = new UserController()
router.get("/", async (req: Request, res: Response) => {
    const response = await controller.getUsers();
    return res.send(response)
})

router.post("/", async (req: Request, res: Response) => {
    const response = await controller.createUser(req.body);
    return res.send(response);
})

router.put("/:id/maintenance", async (req: Request, res: Response) => {
  const response = await controller.createMaintenanceRequest(req.params.id,req.body)
  return res.send(response);
});
router.put("/:id/assignunit", async (req: Request, res: Response) => {
  const response = await controller.createMaintenanceRequest(
    req.params.id,
    req.body
  );
  return res.send(response);
});
router.get("/:id", async (req: Request, res: Response) => {
    const response = await controller.getUser(req.params.id);
    if (!response) res.status(404).send({ message: "User not found" });

    return res.send(response);
})

router.delete("/:id", async (req: Request, res: Response) => {
    const response = await controller.deleteUser(req.params.id);
    return res.send(response);
})

export default router;