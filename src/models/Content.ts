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
},
{
    timestamps: true
});

export default mongoose.model<ContentInfo & mongoose.Document>("Content", ContentSchema);