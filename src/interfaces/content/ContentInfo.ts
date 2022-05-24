import mongoose from "mongoose";
export interface ContentInfo {
    _id: mongoose.Schema.Types.ObjectId;
    title: string,
    thumbnail: string,
    description: string,
    bookmarkCount: Number
}