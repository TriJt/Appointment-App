import express from "express"; 
import { 
    CreateComment,
    UpdateComment,
    DeleteComment,
    GetCommentById
} from "../controllers/Comment.js"

const router = express.Router(); 

//router for get a Comment with id
router.get("/",GetCommentById); 

//router for create Comment
router.post("/",CreateComment); 

//router for update Comment 
router.put("/:commentid", UpdateComment); 

//router for delete Comment 
router.delete("/:commentid", DeleteComment); 

export default router ; 
