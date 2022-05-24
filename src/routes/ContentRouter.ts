import { Router } from "express";
import { ContentController } from "../controllers";

const router: Router = Router();

router.get('/popular', ContentController.getPopularContent);

export default router;