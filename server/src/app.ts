import express from "express";
import fs from "fs";
import path from "path";

import {TController} from "./types";

const PORT = process.env.port || 3000;

const app = express();

const controllerDir = path.join(__dirname, 'controller');

const getFilePath = (fileName: string) => path.join(controllerDir, fileName);

type TControllerFile = { controller: TController };

fs.readdirSync(controllerDir)
    .filter(path => !path.includes('.map'))
    .forEach((fileName) => {
        const {controller: {route, router}}: TControllerFile = require(getFilePath(fileName));

        app.use(route, router);
    });

export const startApp = () => app.listen(PORT, () => {
    console.log(`Server start at ${PORT} port`)
});
