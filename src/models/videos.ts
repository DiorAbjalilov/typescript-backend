import mongoose, { Types } from 'mongoose';
export interface IVideo extends mongoose.Document {
  title: string;
  description: string;
  videos: string;
  type: string;
  view: number;
  userId: Types.ObjectId;
}
const videoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    videos: {
      type: String
    },
    type: {
      type: String,
      require: true
    },
    view: {
      type: Number
    },
    userId: {
      type: Types.ObjectId,
      ref: 'user',
      required: true
    }
  },
  {
    timestamps: true
  }
);
const Video = mongoose.model<IVideo>('video', videoSchema);
export default Video;
