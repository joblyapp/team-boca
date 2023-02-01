import express from 'express';
import { agregarPost } from '../controllers/postsController';
import checkAuth from '../middleware/checkAuth';
const router = express.Router();

router.post("/", checkAuth, agregarPost)