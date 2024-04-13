import mongoose from "mongoose";

export default function connectToDB(url) {
    return mongoose.connect(url);
}