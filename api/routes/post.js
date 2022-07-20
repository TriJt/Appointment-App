import express from "express"; 
import { 
    CreatePost,
    UpdatePost,
    DeletePost,
    GetPostById
} from "../controllers/post.js"

const router = express.Router(); 

//router for get a post with id
router.get("/",GetPostById); 

//router for create post
router.post("/",CreatePost); 

//router for update post 
router.put("/:postid", UpdatePost); 

//router for delete post 
router.delete("/:postid", DeletePost); 

export default router ; 
