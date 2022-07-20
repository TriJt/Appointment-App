import Debt from "../models/Debt.js";
import Debtee from "../models/Debtee.js";

// upload a dept receipt with description

export const CreateDebt = async(req,res, next) =>{ 
    const newDebt = new Debt(req.body);
    try {
       const Debt = await newDebt.save();
       res.status(200).json(Debt); 
    } catch (error) {
        next(error)
    }

}

//update 

export const UpdateDebt = async(req,res,next) => { 

    try {
        const updateDebt = await Debt.findByIdAndUpdate(req.params.debtid, 
            { $set: req.body}, 
            { new: true});
        res.status(200).json(updateDebt); 
    } catch (error) {
        next(error)
    }

}


//delele

export const DeleteDebt = async(req,res,next)=> { 

    try {
        await Debt.findByIdAndDelete(req.params.debtid);
        res.status(200).json("Debt was deleted") 
    } catch (error) {
        next(error)
    }
}

// get one by id 

export const GetDebtById = async(req,res,next) =>{ 
    try {
        const returnedDebt = await Debt.findById(req.params.debtid);
        if (returnedDebt){
            res.status(200).json(returnedDebt); 
        } else {
            return res.status(500).json({ message: "Cannot found debt receipt with given id" });
        }
    } catch (error) {
        next(error)
    }
}

// get all
export const GetDebts = async(req,res,next) =>{ 
    try {
        const returnedDebts = await Debt.find();
        if (returnedDebts){
            res.status(200).json(returnedDebts); 
        } else {
            return res.status(500).json({ message: "Cannot found any debt receipt" });
        }
    } catch (error) {
        next(error)
    }
}

// get all debt receipts in month

export const GetDebtsByMonth = async(req,res,next) =>{ 
    try {
        const debts = await Debt.aggregate([
            {$addFields: {  month : {$month: '$date_paid'}}},
            {$match: { month :  Number(req.params.month)}}
          ]);
        res.status(200).json(debts);
    } catch (error) {
        next(error)
    }
}

// get statistic of debt in month/ quarter/ year

//export const GetStatisticByMonth = async(req,res,next) =>{ 
//    try {
//        const debts = await Debt.find({date_paid : { $month: req.body.month}});
//        res.status(200).json(debts);
//    } catch (error) {
//        next(error)
//    }
//}
