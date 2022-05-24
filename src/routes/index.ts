//router index file
import { Router } from 'express';
import ContentRouter from './ContentRouter';


const router: Router = Router();
router.use('/content', ContentRouter);

export default router;