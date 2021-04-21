import express from 'express';

import {TController} from "../types";

const router = express.Router();

const route = '/';

router.get('/',(req, res) => {
    res.send('Welcome!');
})

export const controller: TController =  { route, router };
