import mongoose from "mongoose";
import { DB_URI } from "./../config";

export const db = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log("db success connected");
  } catch (err) {
    console.log(err);
  }
};

db();
