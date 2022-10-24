import path from "path";
import { isProduction } from "../common/env";

export const rootDir = path.resolve(process.cwd(), "./src/blog");

const developmentPublicPath = path.resolve(process.cwd(), "./public/blog");
const productionPublicPath = path.resolve(process.cwd(), "./out/blog");
export const publicDir = isProduction
  ? productionPublicPath
  : developmentPublicPath;
