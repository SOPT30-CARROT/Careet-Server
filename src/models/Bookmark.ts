import mongoose from "mongoose";
import { BookmarkInfo } from "../interfaces/bookmark/bookmarkInfo";

const BookmarkSchema = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "User"
    },
    content: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "Content"
    }
});

export default mongoose.model<BookmarkInfo & mongoose.Document>("Bookmark", BookmarkSchema);
