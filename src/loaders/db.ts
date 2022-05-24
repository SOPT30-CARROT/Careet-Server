import mongoose from "mongoose";
import config from "../config";
import User from "../models/User";
import Content from "../models/Content";
import Bookmark from "../models/Bookmark";

const connectDB = async () => {
    try {
        await mongoose.connect(config.mongoURI);

        mongoose.set('autoCreate', true);

        console.log("Mongoose Connected ...");

        User.createCollection().then(function (collection) {
            console.log('User Collection is created!');
        });
        Content.createCollection().then(function (collection) {
            console.log('Content Collection is created!');
        });
        Bookmark.createCollection().then(function (collection) {
            console.log('Bookmark Collection is created!');
        });
    } catch (err: any) {
        console.error(err.message);
        process.exit(1);
    }
};

export default connectDB;