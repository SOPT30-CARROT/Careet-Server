import mongoose from "mongoose";
import { UserInfo } from "../interfaces/user/UserInfo";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

export default mongoose.model<UserInfo & mongoose.Document>("User", UserSchema);