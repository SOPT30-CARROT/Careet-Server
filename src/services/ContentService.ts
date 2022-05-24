import Content from "../models/Content";
import { ContentListResponseDto } from "../interfaces/content/ContentListResponseDto";

const getPopularContent = async (): Promise<ContentListResponseDto> => {
    try {
        const contents = await Content.find({});
        console.log(contents);
        return contents;

    } catch (error) {
        console.log(error);
        throw error;
    }
}

export default {
    getPopularContent
}