import express from "express";

import { registerControllers } from "./controller";

const PORT = process.env.PORT;

const app = express();

registerControllers(app);

app.listen(PORT, () => {
  console.log(`Server start at ${PORT} port`);
});
