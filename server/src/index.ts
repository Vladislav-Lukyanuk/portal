import "reflect-metadata";
import express from "express";

import { registerControllers } from "@app/controller";

import "@app/ioc/ioc.config";

const PORT = process.env.PORT;

const app = express();

registerControllers(app);

app.listen(PORT, () => {
  console.log(`Server start at ${PORT} port`);
});
