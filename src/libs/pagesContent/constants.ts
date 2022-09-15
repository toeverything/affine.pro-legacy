import path from "path";
import { isProduction } from "../common/env";

export const rootDir = path.resolve(process.cwd(), "./src/content");

const developmentPublicPath = path.resolve(process.cwd(), "./public/content");
const productionPublicPath = path.resolve(process.cwd(), "./out/content");
export const publicDir = isProduction
  ? productionPublicPath
  : developmentPublicPath;
