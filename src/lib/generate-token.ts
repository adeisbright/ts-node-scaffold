import * as jwt from "jsonwebtoken"
import fileLogger from "../common/logging/error-logger"
import Config from "../config" 
import ErrorAlert from "../common/monitoring/ErrorAlert"

const { JWT: { secret, subject, issuer, expires } } = Config 

/**
 * @description uses provided data to generate a token after 
 * signing the data using set parameters 
 * @param {{Record<string , any>}} data  the data to sign 
 * @returns  {{string}}
 * @example generateToken({foo:bar})
 */
const generateToken = (data: Record<string,any>) : string => {
    try {
        
        const token = jwt.sign({...data},
            secret,
            {
                issuer,
                expiresIn: expires,
                algorithm: "HS512",
                subject
            });
        
        return token
    } catch (error: any) {
        const errorAlert = new ErrorAlert(error.message, error.name);
        errorAlert.notify();
    
        fileLogger.log({
            message: error.message,
            level : "error"
        })

        return ""
    }
}

export default generateToken