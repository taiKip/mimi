import express, { Request, Response } from "express";
import AuthController from "../controllers/auth.controller";
const router = express.Router();

const controller = new AuthController();

router.post("/", async (req: Request, res: Response) => {
  
    const { email, password } = req.body
    if (!email || !password) {
        res.status(401).json({ message: "All fields are required" });
    }
    const { accessToken, refreshToken } = await controller.login({ email, password });
    res.cookie("jwt", refreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        maxAge: 7*24*60*1000
    })
  return res.json({accessToken});
});

router.post("/refresh", async (req: Request, res: Response) => {
    const cookies = req.cookies;  
    if (!cookies?.jwt) return res.status(401).json({ message: "Unauthorized" });
    const refreshToken = cookies.jwt;
    res.json({refreshToken})
    const response = await controller.refresh(refreshToken);
})


export default router;
