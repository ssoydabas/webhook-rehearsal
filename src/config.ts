import dotenv from "dotenv";

dotenv.config();

export const nodeEnv = process.env.NODE_ENV;
export const port = process.env.PORT;
