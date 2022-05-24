import Content from "../models/Content";
import { ContentListResponseDto } from "../interfaces/content/ContentListResponseDto";

const getPopularContent = async (): Promise<ContentListResponseDto> => {
    try {
        let contents = await Content.find({}).sort({ "bookmarkCount": -1 });
        return { contents: contents };
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const getRecentContent = async (): Promise<ContentListResponseDto> => {
    try {
        let contents = await Content.find({}).sort({ "createdAt": -1 });
        return { contents: contents };
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export default {
    getPopularContent,
    getRecentContent
}