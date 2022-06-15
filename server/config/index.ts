import { config } from "dotenv";
config();

export const PORT = process.env.PORT || 3000;
export const DB_URI = process.env.DB_URI || "mongodb://localhost/db_test";
export const TOKEN_SECRET = process.env.TOKEN_SECRET || "token_secret";
