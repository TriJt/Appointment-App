import express from "express";
import {GetSmallServices,
    GetSmallServicesById,
    CreatSmallService,
    UpdateSmallService, 
    DeleteSmallServiceById
} from "../controllers/smallservices.js"; 

const router = express.Router(); 

//router for get all smallservices
router.get("/",GetSmallServices); 

//router for get one smallservice with id
router.get("/:id", GetSmallServicesById)

//router for post smallservice 
router.post("/:serviceid/create", CreatSmallService); 

//router for put smallservice
router.put("/:id",UpdateSmallService); 

//router for delete smallservice
router.delete("/:id", DeleteSmallServiceById)

export default router; 