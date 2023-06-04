import {Error} from "mongoose";
import Constant from "../../constant";
import BadRequestError from "./BadRequestError";
import BaseError from "./BaserError";
import stripe from "stripe";

const {StripeInvalidRequestError, StripeCardError} = stripe.errors;
class ApplicationError extends BaseError {
    name: string;
    statusCode: number;
    message: string;
    constructor(error: any) {
        super(error);

        if (error instanceof Error.ValidationError) {
            //Extract the invalid field from the error message
            const start = error.message.indexOf(": `");
            const end = error.message.indexOf("`., ");
            const message = error.message.slice(start + 1, end);

            Object.setPrototypeOf(this, BadRequestError.prototype);
            this.name = Constant.errorName.badRequest;
            this.statusCode = Constant.statusCode.BAD_REQUEST;
            this.message =  message;

        } else if (this.isDuplicateKeyError(error)) {
            //Extract the duplicate field from the error message
            const start = error.message.indexOf("index: ");
            const end = error.message.indexOf(" dup key:");
            const duplicateKey = error.message.slice(start + 7, end);
            const field = duplicateKey.slice(0, duplicateKey.lastIndexOf("_"));

            Object.setPrototypeOf(this, BadRequestError.prototype);
            this.name = Constant.errorName.badRequest;
            this.statusCode = Constant.statusCode.BAD_REQUEST;
            this.message =  "Duplicate value for " +field;

        } else if (error instanceof StripeInvalidRequestError || error instanceof StripeCardError) {
            Object.setPrototypeOf(this, BadRequestError.prototype);
            this.name = Constant.errorName.badRequest;
            this.statusCode = Constant.statusCode.BAD_REQUEST;
            this.message =  "Payment Error: " + error.message;

        } else {
            Object.setPrototypeOf(this, ApplicationError.prototype);
            this.name = Constant.errorName.serverError;
            this.statusCode = Constant.statusCode.INTERNAL_SERVER_ERROR;
            this.message = error;
        }
    }

    private isDuplicateKeyError = (error: Error) => {
        if (error.message.includes("E11000 duplicate key error collection")) return true;
        return false;
    }
}

export default ApplicationError;
