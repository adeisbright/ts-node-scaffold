import { Request, Response, NextFunction } from "express";
import Constant from "../constant";
import NotFoundError from "../common/error-handler/NotFoundError";

const unsupportedPathHandler = (
    req: Request,
    _: Response,
    next: NextFunction
) => {
    return next(new NotFoundError(Constant.messages.pathNotFound))
};

export default unsupportedPathHandler;
