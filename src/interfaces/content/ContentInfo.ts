import mongoose from "mongoose";
export interface ContentInfo {
    _id: mongoose.Schema.Types.ObjectId;
    name: string,
    thumbnail: string,
    bookmarkCount: Number
}