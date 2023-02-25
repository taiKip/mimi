import express,{Request, Response} from 'express';
import PingController from '../controllers/ping';

const router = express.Router();

/**
 @desc Get all notes
 @route GET /notes
 @access Private
 */
router.get("/ping", async (req: Request, res: Response) => {
    const controller = new PingController();
    const response = await controller.getMessage();
    return res.send(response);
})

export default router;