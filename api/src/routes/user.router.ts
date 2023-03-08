import { userRepository } from './../config/datasource';
import express, { NextFunction, Request, Response } from 'express'
import UserController from '../controllers/user.controller'
import bcrypt from 'bcrypt'
const router = express.Router();
const controller = new UserController()
router.get("/", async (req: Request, res: Response) => {
  
    const response = await controller.getUsers();
    return res.send(response)
})

router.post("/", async (req: Request, res: Response) => {
  const { firstName, lastName, password, email } = req.body;
  if (!firstName || !password || !lastName || !email) {
    return res.status(400).json({message:"All fields are required"})
  }
  const duplicate = await userRepository.findOne({
    where: {
    email:email
    }
  })
  if (duplicate) {
    return res.status(409).json({message:'Duplicate email'})
  }

  //Hash password
  const hashedPwd = await (bcrypt.hash(password, 10))
  
  const userObj = {firstName,lastName,password:hashedPwd,email}
    const response = await controller.createUser(userObj);
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