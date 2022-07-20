import CustomerDebt from "../models/CustomerDebt.js";

// upload a dept receipt with description

export const CreateCustomerDebt = async(req,res, next) =>{ 
    const newCustomerDebt = new CustomerDebt(req.body);
    try {
       const CustomerDebt = await newCustomerDebt.save();
       res.status(200).json(CustomerDebt); 
    } catch (error) {
        next(error)
    }

}

//update 

export const UpdateCustomerDebt = async(req,res,next) => { 

    try {
        const updateCustomerDebt = await CustomerDebt.findByIdAndUpdate(req.params.debtid, 
            { $set: req.body}, 
            { new: true});
        res.status(200).json(updateCustomerDebt); 
    } catch (error) {
        next(error)
    }

}


//delele

export const DeleteCustomerDebt = async(req,res,next)=> { 

    try {
        await CustomerDebt.findByIdAndDelete(req.params.debtid);
        res.status(200).json("CustomerDebt was deleted") 
    } catch (error) {
        next(error)
    }
}

// get one by id 

export const GetCustomerDebtById = async(req,res,next) =>{ 
    try {
        const returnedCustomerDebt = await CustomerDebt.findById(req.params.debtid);
        if (returnedCustomerDebt){
            res.status(200).json(returnedCustomerDebt); 
        } else {
            return res.status(500).json({ message: "Cannot found debt receipt with given id" });
        }
    } catch (error) {
        next(error)
    }
}

// get all
export const GetCustomerDebts = async(req,res,next) =>{ 
    try {
        const returnedCustomerDebts = await CustomerDebt.find();
        if (returnedCustomerDebts){
            res.status(200).json(returnedCustomerDebts); 
        } else {
            return res.status(500).json({ message: "Cannot found any debt receipt" });
        }
    } catch (error) {
        next(error)
    }
}

// get all debt receipts in month

export const GetCustomerDebtsByMonth = async(req,res,next) =>{ 
    try {
        const debts = await CustomerDebt.aggregate([
            {$addFields: {  month : {$month: '$createdAt'}}},
            {$match: { $and: [{state: {$ne:"Đã trả xong"}} , {month :  Number(req.params.month)}]}}
          ]);
        res.status(200).json(debts);
    } catch (error) {
        next(error)
    }
}

// get all debt receipts in quarter

export const GetCustomerDebtsByQuarter = async(req,res,next) =>{ 
    try {
        const debts = await CustomerDebt.aggregate([
            {$addFields: { quarter: {
                $cond: [
                  { $lte: [{ $month: '$createdAt' }, 3] },
                  1,
                  {
                    $cond: [
                      { $lte: [{ $month: '$createdAt' }, 6] },
                      2,
                      {
                        $cond: [{ $lte: [{ $month: '$createdAt' }, 9] }, 3, 4],
                      },
                    ],
                  },
                ],
              },}},
            {$match: { $and: [{state: {$ne:"Đã trả xong"}},{quarter :  Number(req.params.quarter)}]}}
          ]);
        res.status(200).json(debts);
    } catch (error) {
        next(error)
    }
}

// get all debt receipts in year

export const GetCustomerDebtsByYear = async(req,res,next) =>{ 
    try {
        const debts = await CustomerDebt.aggregate([
            {$addFields: {  year : {$year: '$createdAt'}}},
            {$match: { $and: [{state: {$ne:"Đã trả xong"}}, {year :  Number(req.params.year)}]}}
          ]);
        res.status(200).json(debts);
    } catch (error) {
        next(error)
    }
}