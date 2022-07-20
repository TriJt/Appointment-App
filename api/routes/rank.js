import express from "express";


import {
    CreateRank,
    ShowAllRanks,
} from "../controllers/Rank.js";

const router = express.Router();

router.post('/', CreateRank);
router.get('/', ShowAllRanks);

export default router;