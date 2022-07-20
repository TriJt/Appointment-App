import User from '../models/User.js'
import bcryptjs from 'bcryptjs';
import Transaction from '../models/Transaction.js';


// CREATE 

export const createUser = async(req,res, next)=> { 
    try{ 
        const salt = bcryptjs.genSaltSync(10); 
        const hash = bcryptjs.hashSync(res.body.password, salt); 
        const newUser = new User({ 
            ...req.body,
            password:hash,
        })
        try {
            const savedUser = await newUser.save();
            res.status(200).json(savedUser);
          } catch (err) {
            next(err);
          }
    }catch(err){ 
        next(err)
    }
}

//Find with id and update user
//UPDATE
export const updateUser = async (req,res,next)=>{
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      next(err);
    }
  }

// find user with id and delete user
// DELETE
export const deleteUser = async (req,res,next)=>{
     try {
       await User.findByIdAndDelete(req.params.id);
       res.status(200).json("User has been deleted.");
     } catch (err) {
       next(err);
     }
   }

   // GET ONE 
export const getUser = async (req,res,next)=>{
    try {
      const user = await User.findById(req.params.id);
      res.status(200).json(user);
    } catch (err) {
      next(err);
    }
  }

// Get all user 
// GET ALL 
export const getUsers = async (req,res,next)=>{
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (err) {
      next(err);
    }
  }
