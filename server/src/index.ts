import "reflect-metadata";
import { InversifyExpressServer } from "inversify-express-utils";

import "@app/controller";

import { container } from "@app/ioc/ioc.config";

const PORT = process.env.PORT;

const server = new InversifyExpressServer(container);

const app = server.build();

app.listen(PORT, () => {
  console.log(`Server start at ${PORT} port`);
});
