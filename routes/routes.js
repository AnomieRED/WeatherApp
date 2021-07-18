import Router from 'express';
import { getCity, getLocation } from '../controllers/controllers.js'

const router = new Router();

router.get('/', getLocation);

router.post('/', getCity);

export default router