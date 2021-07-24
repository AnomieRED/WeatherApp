import Router from 'express';
import Controllers from '../controllers/controllers.js'

const router = new Router();

router.get('/', Controllers.getLocation);
router.post('/', Controllers.getCity);

export default router