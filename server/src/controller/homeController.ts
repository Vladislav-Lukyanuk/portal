import {Response, Express} from 'express';

import {Controller} from "./controller";

export class HomeController extends Controller {
    constructor(app: Express) {
        super('/', app);

        this.registerEndpoint('get', '/', this.index)
    }

    private index(_, res: Response): void {
        res.send('Hi there!')
    };
}
