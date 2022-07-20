import express from "express";
import { CreateNavigator } from '../controllers/navigator.js';

const router = express.Router();

router.post("/", CreateNavigator);

export default router;