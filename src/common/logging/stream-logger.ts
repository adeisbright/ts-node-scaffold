import winston from "winston";
import path from "path";
import { StreamOptions } from "morgan";

const httpLogFile = path.join("./", "/logs/http.log");

const streamLogger = winston.createLogger({
    transports: [
        new winston.transports.File({
            filename: httpLogFile,
            level: "info"
        })
    ]
});

const stream: StreamOptions = {
    write: (message: string) => streamLogger.info(message)
};

export default stream;
