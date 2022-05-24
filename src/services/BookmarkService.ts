import { BookmarkInfo } from "../interfaces/bookmark/BookmarkInfo";
import Bookmark from "../models/Bookmark";

const toggleBookmark = async (contentId: string, userId: string): Promise<string> => {
    try {


        const bookmarkCheck = await Bookmark.exists({ 
            "content": contentId,
            "user": userId
        });

        if (!bookmarkCheck) {
            const bookmark = new Bookmark({
                content: contentId,
                user: userId,
            });
            await bookmark.save();

            return "create";
        }

        const bookmark = await Bookmark.deleteOne({
            content: contentId,
            user: userId,
        });

        return "delete";

    } catch (error) {
        console.log(error);
        throw error;
    }
}


export default {
    toggleBookmark,
}
