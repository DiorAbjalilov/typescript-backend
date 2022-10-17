import { Request, Response } from 'express';
import Video from '../models/videos';

// get all videos
const getVideos = async (req: Request, res: Response) => {
  try {
    const { id } = req.query;
    const result = await Video.find({ userId: id });
    await res.status(200).json({ success: true, data: result, error: false });
  } catch (error) {
    await res.status(404).json({ success: false, data: [], error: error });
    console.log(error);
  }
};

// add new video
const addVideos = async (req: Request, res: Response) => {
  try {
    const { title, description, videos, type, view, userId } = req.body;
    const result = new Video({
      title,
      description,
      type,
      videos,
      view,
      userId
    });
    await result.save().then(() => {
      res.status(201).json({ seccuss: true, data: result, error: false });
    });
  } catch (error) {
    await res.status(404).json({ success: false, data: [], error: error });
    console.log(error);
  }
};

// update old video
const putVideos = async (req: Request, res: Response) => {
  try {
    const { id } = req.query;
    const isVideo = await Video.findById({ _id: id });
    if (!!isVideo) {
      Object.assign(isVideo, req.body);
      await isVideo
        .save()
        .then(() => {
          res
            .status(200)
            .json({ success: true, data: isVideo, message: 'video updated' });
        })
        .catch((error) => {
          res.status(400).json({ success: false, data: [], message: error });
        });
    }
    await res
      .status(404)
      .json({ success: false, data: [], message: 'video not found' });
  } catch (error) {
    await res.status(404).json({ success: false, data: [], message: error });
    console.log(error);
  }
};

// delete one video
const deleteVideos = async (req: Request, res: Response) => {
  try {
    const { id } = req.query;
    const isVideo = await Video.findByIdAndDelete({ _id: id });
    if (!!isVideo) {
      await res
        .status(200)
        .json({ success: true, data: [], message: 'video deleted' });
    } else {
      await res
        .status(401)
        .json({ success: false, data: [], message: 'video not found' });
    }
  } catch (error) {
    await res.status(404).json({ success: false, data: [], message: error });
    console.log(error);
  }
};

export const videos = {
  getVideos,
  addVideos,
  putVideos,
  deleteVideos
};
