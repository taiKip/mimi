import express, { Request, Response } from "express";
import UserRouter from "./user.router";
import PropertyRouter from "./property.router";

const router = express.Router();

/**
 @desc Get all notes
 @route GET /notes
 @access Private
 */

router.use("/api/v1/users", UserRouter);
router.use("/api/v1/properties", PropertyRouter);

export default router;
