import {Express, Request, Response, Router} from 'express';

import {IController} from './types';

export class Controller implements IController {
    private readonly router: Router = Router();

    constructor(route: string, app: Express) {
      app.use(route, this.router);
    }

    public registerEndpoint(
        method: 'get' | 'post' | 'put' | 'delete',
        path: string,
        callback: <T>(req: Request, res: Response) => T | void,
    ) {
      this.router[method](path, callback);
    }
}
