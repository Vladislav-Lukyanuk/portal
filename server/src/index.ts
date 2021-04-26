import express from "express";

import {registerControllers} from "./controller";

const PORT = process.env.port || 3000;

const app = express();

registerControllers(app);

app.listen(PORT, () => {
    console.log(`Server start at ${PORT} port`)
});
