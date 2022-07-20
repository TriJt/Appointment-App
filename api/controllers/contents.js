import SmallServices from "../models/SmallService.js";
import Contents from "../models/Contents.js"; 

/*
    Get all contents
    GET api/content/
*/
export  const GetContents = async(req,res,next)=>{
    Contents.find((err,result) =>{ 
        if(err) return next(err)
        res.json(result)
    })
}

/*
    Get one contents with id contents
    GET api/content/:id
*/ 


export const GetContentsById = async(req,res,next) => {

    Contents.findById(req.params.id, (err,result)=>{ 
        if(err) return next(err)
        res.json(result); 
    })
}

/*
Post  a content to database
POST api/content/
when post contents, id content will be add into field contents of smallservice 
*/

export const CreateContents = async(req, res, next) =>{ 
    const SmallServiceId = req.params.smallserviceid; 
    const newContents = new Contents(req.body);
    try{ 
        const saveContents = await newContents.save(); 
        try {
            await SmallServices.findByIdAndUpdate(SmallServiceId, {
              $push: { content: saveContents._id},
            });
          } catch (err) {   
            next(err);
          }
          res.status(200).json(saveContents);
    }catch(err){ 
        next(err)
    }
   
}


/* 
Put a Contents in database
PUT api/content/:id
*/

export const UpdateContents = async(req, res, next) => {
    try{ 
        const updateContents = await Contents.findByIdAndUpdate(req.params.id, 
            {$set: req.body}, 
            {new: true}); 
        res.status(200).json(updateContents)
    } 
    catch(err){ 
        next(err); 
    }
    
}

/*
Delete Contents in database 
DELETE api/content/:id  
*/ 

export const DeleteContentsById = async(req, res, next) => { 
    try{ 
        // xóa conten
        await  Contents.findByIdAndDelete(req.params.id); 
        // tìm id content trong smallservice và xóa nó đi
        try{ 
            const smallservice = await SmallServices.findOne({contents: req.params.id}); 
            if(smallservice !=null)
                { 
                    await SmallServices.findByIdAndUpdate(smallservice.id, { 
                       $pull: {content: req.params.id} 
                    })
                }
        }catch(err){
            next(err)
        }
    }
    catch(err){ 
        next(err); 
    }
}