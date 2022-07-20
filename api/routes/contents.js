import express from "express";
import {GetContents,
    GetContentsById,
    CreateContents,
    UpdateContents, 
    DeleteContentsById
} from "../controllers/contents.js"; 

const router = express.Router(); 

//router for get all Contents
router.get("/",GetContents); 

//router for get one Contents with id
router.get("/:id", GetContentsById)

//router for post Contents 
router.post("/:smallserviceid/create", CreateContents); 

//router for put Contents
router.put("/:id",UpdateContents); 

//router for delete Contents
router.delete("/:id", DeleteContentsById)

export default router; 