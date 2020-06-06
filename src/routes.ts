import express from 'express';
import knex from './database/connection';
import multer from 'multer';
import multerConfig from './configs/multer';

import PointsController from './controllers/Pointscontroller';
import ItemsController from './controllers/ItemsController';


const routes = express.Router();
const upload = multer(multerConfig);

const pointController = new PointsController();
const itemsController = new ItemsController();

routes.get('/items', itemsController.index);
routes.get('/points', pointController.index);
routes.get('/points/:id', pointController.show);

routes.post('/points', upload.single('image'), pointController.create);

export default routes;