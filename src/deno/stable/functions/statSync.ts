///<reference path="../lib.deno.d.ts" />

import * as fs from "fs";
import { denoifyFileInfo } from "./stat";

export const statSync: typeof Deno.statSync = (path) =>
  denoifyFileInfo(fs.statSync(path));
