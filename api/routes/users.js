import {
    updateUser,
    deleteUser,
    getUser,
    getUsers,
    createUser
  } from "../controllers/user.js";

  import express from "express";
  const router = express.Router();
  


  //CREATE 
  router.post("/",  createUser)
  
  //UPDATE
  router.put("/",updateUser);
  
  //DELETE
  router.delete("/",deleteUser);
  
  //GET
  router.get("/:id", getUser);
  
  //GET ALL
  router.get("/",  getUsers);

  export default router;
  
