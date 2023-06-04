import express, { Application } from "express" 
import helmet from "helmet";
import cors from "cors";
import compression from "compression";
import httpLogger from "./common/logging/http-logger";

const app: Application = express() 

app.use(compression());
app.use(express.json());
app.use(helmet());
app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(httpLogger)

export default app