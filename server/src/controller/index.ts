import {Express} from 'express';

import {HomeController} from './homeController';

const controllers = [HomeController];

const registerControllers = (app: Express) => {
  controllers.forEach((controller) => {
    new controller(app);
  });
};

export {registerControllers};
