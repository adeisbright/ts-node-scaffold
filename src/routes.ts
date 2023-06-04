import { Router  , Request , Response} from "express";
import Constant from "./constant";

const router = Router();

router.get("/api-health", (_: Request, res: Response) => {
  res.status(Constant.statusCode.OK).json({
    message: Constant.messages.apiHealth,
    success: true,
    statusCode: Constant.statusCode.OK,
  });
});

export default router 