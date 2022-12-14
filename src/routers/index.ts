import express, { Request, Response } from 'express';
const router = express.Router();
import constroller from '../controller';

// videos api connect
router.get('/videos', constroller.videos.getVideos);
router.post('/videos', constroller.videos.addVideos);
router.put('/videos', constroller.videos.putVideos);
router.delete('/videos', constroller.videos.deleteVideos);

// videos api connect
router.get('/users', constroller.users.getAllUsers);
router.post('/user', constroller.users.addUser);
router.put('/user', constroller.users.putUser);
router.delete('/user', constroller.users.deleteUser);

// basic menu api connect
// router.get('/basicMenu', constroller.basicMenu.getBasicMenu);
// router.post('/basicMenu', constroller.basicMenu.addBasicMenu);
// router.put('/basicMenu', constroller.basicMenu.putBasicMenu);
// router.delete('/basicMenu', constroller.basicMenu.deleteBasicMenu);
// sub menu api connect
// router.get('/subMenu', constroller.subMenu.getSubMenu);
// router.post('/subMenu', constroller.subMenu.addSubMenu);
// router.put('/subMenu', constroller.subMenu.putSubMenu);
// router.delete('/subMenu', constroller.subMenu.deleteSubMenu);

export const routers = router;
