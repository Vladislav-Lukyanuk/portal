import {Router} from "express";

export interface IController {
    getRoute: () => string;
    getRouter: () => Router;
}
