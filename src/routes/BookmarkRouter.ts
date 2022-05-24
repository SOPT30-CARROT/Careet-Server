import e from "express";
import express, { Router } from "express";
import { BookmarkController } from "../controllers";

const router: express.Router = Router();

router.post('/:contentId/:userId', BookmarkController.toggleBookmark);

export default router;
