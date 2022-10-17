import { Request, Response } from 'express';
import User from '../models/user';

// get all users
const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await User.find();
    await res.status(200).json({ success: true, data: result, error: false });
  } catch (error) {
    await res.status(501).json({ success: false, data: [], error: error });
    console.log(error);
  }
};

// add new user
const addUser = async (req: Request, res: Response) => {
  try {
    const { name, description, type, avatar } = req.body;
    const result = new User({
      name,
      description,
      type,
      avatar
    });
    await result.save().then(() => {
      res.status(201).json({ seccuss: true, data: result, error: false });
    });
  } catch (error) {
    console.log(error);
    await res.status(501).json({ success: false, data: [], error: error });
  }
};

// update old user
const putUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.query;
    const isUser = await User.findById({ _id: id });
    if (!!isUser) {
      Object.assign(isUser, req.body);
      await isUser
        .save()
        .then(() => {
          res
            .status(200)
            .json({ success: true, data: isUser, message: 'user updated' });
        })
        .catch((error) => {
          res.status(400).json({ success: false, data: [], message: error });
        });
    }
    await res
      .status(404)
      .json({ success: false, data: [], message: 'user not found' });
  } catch (error) {
    await res.status(400).json({ success: false, data: [], message: error });
    console.log(error);
  }
};

// delete one user
const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.query;
    const isUser = await User.findByIdAndDelete({ _id: id });
    if (!!isUser) {
      await res
        .status(200)
        .json({ success: true, data: [], message: 'user deleted' });
    } else {
      await res
        .status(401)
        .json({ success: false, data: [], message: 'user not found' });
    }
  } catch (error) {
    await res.status(404).json({ success: false, data: [], message: error });
    console.log(error);
  }
};

export const users = {
  getAllUsers,
  addUser,
  putUser,
  deleteUser
};
