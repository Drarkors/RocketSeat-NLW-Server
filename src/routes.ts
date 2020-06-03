import express from 'express';
import knex from './database/connection';

import PointsController from './controllers/Pointscontroller';
import ItemsController from './controllers/ItemsController';

const routes = express.Router();

const pointController = new PointsController();
const itemsController = new ItemsController();

routes.get('/items', itemsController.index);

routes.post('/points', pointController.create);
routes.get('/points', pointController.index);
routes.get('/points/:id', pointController.show);

export default routes;