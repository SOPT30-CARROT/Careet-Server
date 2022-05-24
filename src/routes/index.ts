//router index file
import { Router } from 'express';
import BookmarkRouter from './BookmarkRouter';


const router = Router();

router.use('/bookmark', BookmarkRouter)



export default router;
