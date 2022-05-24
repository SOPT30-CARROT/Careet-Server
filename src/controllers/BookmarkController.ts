import express, { Request, Response } from "express";
import { BookmarkInfo } from "../interfaces/bookmark/bookmarkInfo";
import message from "../modules/responseMessage";
import statusCode from "../modules/statusCode";
import util from "../modules/util";
import BookmarkService from "../services/BookmarkService";

const toggleBookmark = async (req: Request, res: Response): Promise<void> => {
    const params = req.params;

    const contentId: string = params.contentId;
    const userId: string = params.userId;

    try {
        // const bookmarkInfo: BookmarkInfo = 
        const data = await BookmarkService.toggleBookmark(contentId, userId);
        console.log(data);
        if (data === "create") {
            res.status(statusCode.CREATED).send(util.success(statusCode.CREATED, message.CREATE_BOOKMARK_SUCCESS, data));    
        } else 
        if (data === "delete") {
            res.status(statusCode.CREATED).send(util.success(statusCode.CREATED, message.DELETE_BOOKMARK_SUCCESS, data));    
        }

    } catch (error) {
        console.log(error);
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
    }
}

export default {
    toggleBookmark,
}