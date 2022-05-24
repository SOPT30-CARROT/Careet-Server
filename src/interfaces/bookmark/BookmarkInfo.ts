import mongoose from "mongoose";

export interface BookmarkInfo {
    user: mongoose.Types.ObjectId;
    content: mongoose.Types.ObjectId;
}
