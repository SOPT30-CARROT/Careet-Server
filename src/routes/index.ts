//router index file
import { Router } from 'express';
import ContentRouter from './ContentRouter';
import BookmarkRouter from './BookmarkRouter';

const router: Router = Router();

router.use('/bookmark', BookmarkRouter)
router.use('/content', ContentRouter);


export default router;
