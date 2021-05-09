import "reflect-metadata";
import { InversifyExpressServer } from "inversify-express-utils";
import bodyParser from "body-parser";

import "@app/controller";

import { container } from "@app/ioc/ioc.config";

import { exceptionHandler } from "@app/config/exceptionHandler";
import { AuthProvider } from "@app/config/authProvider";

const PORT = process.env.PORT;

const server = new InversifyExpressServer(
  container,
  null,
  null,
  null,
  AuthProvider
);

server.setConfig((app) => {
  app.use(bodyParser.urlencoded({ extended: false }));

  app.use(bodyParser.json());
});

server.setErrorConfig((app) => {
  app.use(exceptionHandler);
});

const app = server.build();

app.listen(PORT, () => {
  console.log(`Server start at ${PORT} port`);
});
