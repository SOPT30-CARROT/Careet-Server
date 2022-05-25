import { Router } from "express";
import { ContentController } from "../controllers";

const router: Router = Router();

router.get('/popular', ContentController.getPopularContent);
router.get('/recent', ContentController.getRecentContent);

export default router;