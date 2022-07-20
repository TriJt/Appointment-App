 import express from "express";
 import {GetServices,
        GetServicesById,
        CreatService,
        UpdateService,
        DeleteServiceById,
        addSmallService,
        deleteSmallService,
} from "../controllers/service.js"; 

const router = express.Router(); 

//router for get all services
router.get("/",GetServices); 

//router for get one service with id
router.get("/:serviceId", GetServicesById)

//router for post service 
router.post("/", CreatService); 

//router for adding smallservice
router.post('/smallservice', addSmallService);
router.post('/smallservice/delete', deleteSmallService);

//router for put service
router.put("/:serviceId",UpdateService); 

//router for delete service
router.delete("/", DeleteServiceById)

export default router; 