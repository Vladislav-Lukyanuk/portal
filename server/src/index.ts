import "reflect-metadata";
import { InversifyExpressServer } from "inversify-express-utils";

import "@app/controller";

import { container } from "@app/ioc/ioc.config";
import bodyParser from "body-parser";

const PORT = process.env.PORT;

const server = new InversifyExpressServer(container);

server.setConfig((app) => {
  app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );
  app.use(bodyParser.json());
});

const app = server.build();

app.listen(PORT, () => {
  console.log(`Server start at ${PORT} port`);
});
