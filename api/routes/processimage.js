import express from "express"; 
import { 
    CreateProcessImage,
    UpdateProcessImage,
    DeleteProcessImage,
    GetProcessImageById,
    GetCustomerInfoByProcessImageId,
    GetProcessImages
} from "../controllers/processimage.js"

const router = express.Router(); 

//router for create image of process with description
router.post("/",CreateProcessImage); 

//router for update image of process with description
router.put("/:processimageid", UpdateProcessImage); 

//router for delete image of process with description 
router.delete("/:processimageid", DeleteProcessImage); 

//router for get an image of process with description with id
router.get("/:processimageid",GetProcessImageById); 

//router for get all images of processes
router.get("/",GetProcessImages); 

//router for get user information of an image of process with description with id
router.get("/:processimageid/user_info",GetCustomerInfoByProcessImageId); 

export default router ; 
