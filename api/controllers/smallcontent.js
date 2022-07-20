import SmallContents from "../models/SmallContents.js";
import Contents from "../models/Contents.js"; 

/*
    Get all smallcontents
    GET api/smallcontent/
*/
export  const GetSmallContents = async(req,res,next)=>{
    SmallContents.find((err,result) =>{ 
        if(err) return next(err)
        res.json(result)
    })
}

/*
    Get one SmallContents with id SmallContents
    GET api/content/:id
*/ 


export const GetSmallContentsById = async(req,res,next) => {

    SmallContents.findById(req.params.id, (err,result)=>{ 
        if(err) return next(err)
        res.json(result); 
    })
}

/*
Post  a smallcontent to database
POST api/smallcontent/
when post smallcontents, id content will be add into field smallcontents of smallservice 
*/

export const CreateSmallContents = async(req, res, next) =>{ 
    const contentId = req.params.contentid; 
    const newSmallContents = new SmallContents(req.body);
    try{ 
        const saveSmallContents = await newSmallContents.save(); 
        try {
            await Contents.findByIdAndUpdate(contentId, {
              $push: { smallcontent: saveSmallContents._id},
            });
          } catch (err) {   
            next(err);
          }
          res.status(200).json(saveSmallContents);
    }catch(err){ 
        next(err)
    }
   
}


/* 
Put a smallcontent in database
PUT api/smallcontent/:id
*/

export const UpdateSmallContents = async(req, res, next) => {
    try{ 
        const updateSmallContents = await SmallContents.findByIdAndUpdate(req.params.id, 
            {$set: req.body}, 
            {new: true}); 
        res.status(200).json(updateSmallContents)
    } 
    catch(err){ 
        next(err); 
    }
    
}

/*
Delete SmallContents in database 
DELETE api/smallcontent/:id  
*/ 

export const DeleteSmallContentsById = async(req, res, next) => { 
    try{ 
        // xóa conten
        await  SmallContents.findByIdAndDelete(req.params.id); 
        // tìm id content trong smallservice và xóa nó đi
        try{ 
            const content = await Contents.findOne({smallcontent: req.params.id}); 
            if(content !=null)
                { 
                    await Contents.findByIdAndUpdate(content.id, { 
                       $pull: {smallcontent: req.params.id} 
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