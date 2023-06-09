import { Router  , Request , Response} from "express";
import Constant from "./constant";

const router = Router();

router.get("/api-health", (_: Request, res: Response) => {
  res.status(600).json({
    message: Constant.messages.apiHealth,
    success: true,
    statusCode: Constant.statusCode.OK,
  });
});

export default router 