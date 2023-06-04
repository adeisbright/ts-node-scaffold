import * as dotenv from "dotenv";
dotenv.config();

interface IJWT {
  secret: string;
  issuer: string;
  expires: number;
  subject: string;
  algorithm: string;
}



interface IConfig {
    serverPort: string;
    JWT: IJWT
}

const Config: IConfig = {
    serverPort: process.env.SERVER_PORT as string,
    JWT: {
        secret: process.env.JWT_SECRET as string,
        issuer: process.env.JWT_ISSUER as string,
        subject: process.env.JWT_SUBJECT as string,
        algorithm: process.env.JWT_ALGORITHM as string,
        expires: Number(process.env.JWT_EXPIRES)
    }  
}

export default Config;
