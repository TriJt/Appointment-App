import ProcessImage from "../models/ProcessImage.js";
import User from "../models/User.js";

// upload an image of process with description

export const CreateProcessImage = async(req,res, next) =>{ 
    const newProcessImage = new ProcessImage(req.body); 
    try {
       const ProcessImage = await newProcessImage.save(); 
       res.status(200).json(ProcessImage); 
    } catch (error) {
        next(error)
    }

}

//update 

export const UpdateProcessImage = async(req,res,next) => { 

    try {
        const updateProcessImage = await ProcessImage.findByIdAndUpdate(req.params.processimageid, 
            { $set: req.body}, 
            { new: true});
        res.status(200).json(updateProcessImage); 
    } catch (error) {
        next(error)
    }

}


//delele

export const DeleteProcessImage = async(req,res,next)=> { 

    try {
        await ProcessImage.findByIdAndDelete(req.params.processimageid);
        res.status(200).json("Image of process was deleted") 
    } catch (error) {
        next(error)
    }
}

// get one by id 

export const GetProcessImageById = async(req,res,next) =>{ 
    try {
        const returnedProcessImage = await ProcessImage.findById(req.params.processimageid);
        if (returnedProcessImage){
            res.status(200).json(returnedProcessImage); 
        } else {
            return res.status(500).json({ message: "Cannot found image of process with given id" });
        }
    } catch (error) {
        next(error)
    }
}

// get all
export const GetProcessImages = async(req,res,next) =>{ 
    try {
        const returnedProcessImages = await ProcessImage.find();
        if (returnedProcessImages){
            res.status(200).json(returnedProcessImages); 
        } else {
            return res.status(500).json({ message: "Cannot found any image of any process" });
        }
    } catch (error) {
        next(error)
    }
}

// get customer information

export const GetCustomerInfoByProcessImageId = async(req,res,next) =>{ 
    try {
        const process_image = await ProcessImage.findById(req.params.processimageid);
        if (process_image){
            const user_info = await User.findById(process_image.user_id)
            res.status(200).json(user_info); 
        } else {
            return res.status(500).json({ message: "Cannot found customer of this image" });
        } 
    } catch (error) {
        next(error)
    }
}
