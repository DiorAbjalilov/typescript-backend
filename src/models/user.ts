import mongoose from 'mongoose';
export interface IUser extends mongoose.Document {
  name: string;
  description: string;
  avatar: string;
  type: string;
}
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    avatar: {
      type: String
    },
    type: {
      type: String,
      require: true
    }
  },
  {
    timestamps: true
  }
);
const User = mongoose.model<IUser>('user', userSchema);
export default User;
