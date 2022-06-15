import { Schema, model, Document } from "mongoose";
import bcrypt from "bcrypt";
export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  hashPass(password: string): Promise<string>;
  verifypass(password: string): Promise<boolean>;
}

const User = new Schema({
  name: { type: String },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

User.methods.hashPass = async (pass: string): Promise<string> => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(pass, salt);
};

User.methods.verifypass = async function (pass: string): Promise<boolean> {
  return await bcrypt.compare(pass, this.password);
};

User.pre("save", async function () {
  this.password = await this.hashPass(this.password);
});

export default model<IUser>("users", User);
