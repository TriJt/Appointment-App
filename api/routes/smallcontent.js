import express from "express";
import {GetSmallContents,
    GetSmallContentsById,
    CreateSmallContents,
    UpdateSmallContents, 
    DeleteSmallContentsById
} from "../controllers/smallcontent.js"; 

const router = express.Router(); 

//router for get all SmallContents
router.get("/",GetSmallContents); 

//router for get one SmallContents with id
router.get("/:id", GetSmallContentsById)

//router for post SmallContents 
router.post("/:contentid/create", CreateSmallContents); 

//router for put SmallContents
router.put("/:id",UpdateSmallContents); 

//router for delete SmallContents
router.delete("/:id", DeleteSmallContentsById)

export default router; 