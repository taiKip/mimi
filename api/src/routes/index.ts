import express, { Request, Response } from "express";
import UserRouter from "./user.router";
import PropertyRouter from "./property.router";
import UnitRouter from './unit.router'
import AddressRouter from './address.router'

const router = express.Router();

/**
 @desc Get all notes
 @route GET /notes
 @access Private
 */

router.use("/api/v1/users", UserRouter);
router.use("/api/v1/properties", PropertyRouter);
router.use("/api/v1/units", UnitRouter)
router.use("/api/v1/addresses",AddressRouter)

export default router;
