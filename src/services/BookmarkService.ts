import { BookmarkInfo } from "../interfaces/bookmark/BookmarkInfo";
import { ContentListResponseDto } from "../interfaces/content/ContentListResponseDto";
import Bookmark from "../models/Bookmark";
import Content from "../models/Content";

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

const getContentBookmarked = async (userId: string): Promise<ContentListResponseDto> => {
    try {
        const bookmarks = await Bookmark.find({"user": userId});
        const contentIds = [];
        for (let i = 0; i < bookmarks.length; i++) {
            contentIds.push(bookmarks[i].content);
        }
        
        const contentListResponseDto = await Content.find({
            '_id': { $in: contentIds }
        })

        return { contents: contentListResponseDto };

    } catch (error) {
        console.log(error);
        throw error;
    }
}


export default {
    toggleBookmark,
    getContentBookmarked,
}
