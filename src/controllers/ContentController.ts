import express, { Request, Response } from "express";
import util from "../modules/util";
import message from "../modules/responseMessage";
import statusCode from "../modules/statusCode";
import { ContentService } from "../services";

/**
 * @route GET /content/popular
 * @desc Get popular contents
 * @access Public
 */
const getPopularContent = async (req: Request, res: Response) => {

    try {
        const contents = await ContentService.getPopularContent();
        res.status(statusCode.OK).send(util.success(statusCode.OK, message.GET_POPULAR_CONTENTS_SUCCESS, contents));
    } catch (error) {
        console.log(error);
        return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));   
    }
}

export default {
    getPopularContent
}