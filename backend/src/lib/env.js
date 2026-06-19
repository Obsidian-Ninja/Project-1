// # Adding a globalisez env config
import dotenv from "dotenv";

// use quit, so that we dont see the warnings
dotenv.config({quiet: true});

export const ENV = {
    PORT: process.env.PORT,
    DB_URL: process.env.DB_URL,
    NODE_ENV: process.env.NODE_ENV
};