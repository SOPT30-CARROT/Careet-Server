import mongoose from "mongoose";
import { ContentInfo } from "../interfaces/content/ContentInfo";

const ContentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    bookmarkCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model<ContentInfo & mongoose.Document>("Content", ContentSchema);