import express from "express";

import {controllers} from "./controller";

const PORT = process.env.port || 3000;

const app = express();

controllers.forEach(controller => {
    app.use(controller.getRoute(), controller.getRouter());
})

app.listen(PORT, () => {
    console.log(`Server start at ${PORT} port`)
});
