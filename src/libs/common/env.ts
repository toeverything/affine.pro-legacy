import path from "path";

export const isProduction = process.env.NODE_ENV === "production";

export const projectRootDir = path.resolve(__dirname, "../../..");
