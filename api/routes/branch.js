import express from "express";

import {
    CreateBranch,
    GetAllBranch,
    InsertBooking,
} from '../controllers/branch.js';

const router = express.Router();

router.post('/', CreateBranch);

router.get("/", GetAllBranch);

router.post("/booking", InsertBooking);

export default router;