import Transaction from "../models/Transaction.js";
import User from "../models/User.js";
import Order from "../models/Order.js";
import Customer from "../models/Customer.js";

// create transaction

export const CreateTransaction = async(req,res, next) =>{ 
    if (req.body.customer_phone && req.body.customer_phone != "") {
        const findByPhone = await Customer.findOne({phone: req.body.customer_phone}).clone();
        if (!findByPhone) return res.json({
            success: false,
            message: "Khách hàng chưa tồn tại, vui lòng thêm khách hàng trước đã!"
        })
    } else {
        return res.json({
            success: false,
            message: "Vui lòng nhập số điện thoại"
        })
    }
    const newTransaction = new Transaction(req.body); 
    try {
       const Transaction = await newTransaction.save(); 
       res.status(200).json(Transaction); 
    } catch (error) {
        next(error)
    }

}

//update 

export const UpdateTransaction = async(req,res,next) => { 

    try {
        const updatedTransaction = await Transaction.findByIdAndUpdate(req.params.transactionid, 
            { $set: req.body}, 
            { new: true});
        res.status(200).json(updatedTransaction); 
    } catch (error) {
        next(error)
    }

}


//delele

export const DeleteTransaction = async(req,res,next)=> { 

    try {
        await Transaction.findByIdAndDelete(req.params.transactionid);
        res.status(200).json("Transaction was deleted") 
    } catch (error) {
        next(error)
    }
}

// get one by id 

export const GetTransactionById = async(req,res,next) =>{ 
    try {
        const returnedTransaction = await Transaction.findById(req.params.transactionid);
        if (returnedTransaction){
            res.status(200).json(returnedTransaction); 
        } else {
            return res.status(500).json({ message: "Cannot found transaction with given id" });
        }
    } catch (error) {
        next(error)
    }
}

// get all
export const GetTransactions = async(req,res,next) =>{ 
    try {
        const returnedTransactions = await Transaction.find();
        if (returnedTransactions){
            res.status(200).json(returnedTransactions); 
        } else {
            return res.status(500).json({ message: "Cannot found any transaction" });
        }
    } catch (error) {
        next(error)
    }
}

// get order of transaction

export const GetOrderOfTransaction = async(req,res,next) =>{ 
    try {
        const transaction = await Transaction.findById(req.params.transactionid);
        if (transaction){
            const order = await Order.findById(transaction.user_id)
            res.status(200).json(order); 
        } else {
            return res.status(500).json({ message: "Cannot found order of the transaction" });
        } 
    } catch (error) {
        next(error)
    }
}

// get customer information

export const GetCustomerInfoByTransaction = async(req,res,next) =>{ 
    try {
        const transaction = await Transaction.findById(req.params.transactionid);
        if (transaction){
            const user_info = await User.findById(transaction.user_id)
            res.status(200).json(user_info); 
        } else {
            return res.status(500).json({ message: "Cannot found customer of the transaction" });
        } 
    } catch (error) {
        next(error)
    }
}

// get employee information

export const GetEmployeeInfoByTransaction = async(req,res,next) =>{ 
    try {
        const transaction = await Transaction.findById(req.params.transactionid);
        if (transaction){
            const emp_info = await Employee.findById(transaction.user_id);
            res.status(200).json(emp_info); 
        } else {
            return res.status(500).json({ message: "Cannot found employee of the transaction" });
        } 
    } catch (error) {
        next(error)
    }
}
// get all transactions of spa in a specific time

export const GetTransactionsByTime = async(req, res, next) => {
    try {
        const transactions = await Transaction.find({date_paid : {$gte: req.body.from_date, $lte: req.body.to_date}});
        res.status(200).json(transactions);
    } catch(error) {
        next(error)
    }
}