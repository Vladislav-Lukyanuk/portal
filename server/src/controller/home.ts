import {Router, Request, Response} from 'express';

import {IController} from "./types";

export class HomeController implements IController {
    private readonly route: string = "/";
    private readonly router: Router = Router();

    constructor() {
        this.router.get('/', this.index);
    }

    private index(req: Request, res: Response): void {
        res.send('Hi there!')
    };

    getRoute(): string {
        return this.route;
    }

    getRouter(): Router {
        return this.router;
    }

}
