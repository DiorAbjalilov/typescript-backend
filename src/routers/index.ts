import express, { Request, Response } from 'express';
const router = express.Router();
import constroller from '../controller';
// basic menu api connect
router.get('/basicMenu', constroller.basicMenu.getBasicMenu);
router.post('/basicMenu', constroller.basicMenu.addBasicMenu);
router.put('/basicMenu', constroller.basicMenu.putBasicMenu);
router.delete('/basicMenu', constroller.basicMenu.deleteBasicMenu);
// sub menu api connect
router.get('/subMenu', constroller.subMenu.getSubMenu);
router.post('/subMenu', constroller.subMenu.addSubMenu);
router.put('/subMenu', constroller.subMenu.putSubMenu);
router.delete('/subMenu', constroller.subMenu.deleteSubMenu);
// videos api connect
router.get('/videos', constroller.videos.getVideos);
router.post('/videos', constroller.videos.addVideos);
router.put('/videos', constroller.videos.putVideos);
router.delete('/videos', constroller.videos.deleteVideos);

module.exports = router;
