import Customer from "../models/Customer.js";
import Branch from "../models/Branch.js";
import CustomerDebt from "../models/CustomerDebt.js";
import Transaction from "../models/Transaction.js";
import Rank from "../models/Rank.js";

import winston from 'winston';

const logger = winston.createLogger({
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
        //
        // - Write all logs with importance level of `error` or less to `error.log`
        // - Write all logs with importance level of `info` or less to `combined.log`
        //
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' }),
    ],
});

/*
    GET  all information of customer
    GET api/customer
*/
// export const GetCustomer = async(req, res, next)=>{ 
//     //logger.info(req.body);
//     if (req.body[0].branch == "all") {
//         Customer.find((err,result) => {
//             if (err) {
//                 return res.json([
//                     {
//                         success: false,
//                         message: "Lỗi server, vui lòng thử lại sau",
//                         error: err.message
//                     }
//                 ])
//             }
//             return res.json([
//                 {
//                     success: true,
//                     list: result
//                 }
//             ])
//         })
//     } else {
//         const result = [];
//         Promise.all(req.body[0].branch.map(async(item, index) => {
//             const obj = {};
//             await Customer.find({_id: item}, (err,result) => {
//                 if (err) return res.json([
//                     {
//                         success: false,
//                         error: err.message,
//                         message: "Lỗi server, vui lòng thử lại sau",
//                     }
//                 ])
//                 obj.customer = result;
//             }).clone();
//             await Branch.findOne({_id:item}, (err, result) => {
//                 if (err) return res.json([
//                     {
//                         success: true,
//                         error: err.message,
//                         message: "Lỗi server, vui lòng thử lại sau",
//                     }
//                 ])
//                 obj.branch = result.city + "," + result.district + "," + result.address;
//             }).clone();
//             result.push(obj);
//             logger.info(result);
//             //return result;
//             if (result.length == req.body[0].branch.length) {
//                 return result;
//             }
//         })).then(function (a) {
//             return res.json([
//                 {
//                     success: true,
//                     list: result
//                 }
//             ])
//         })
//     }
// }

export const GetCustomer = (req, res) => {
    Customer.find(async (err, customer) => {
        if (err) {
            return res.json([
                {
                    success: false,
                    message: "Lỗi server, vui lòng thử lại sau!",
                }
            ])
        }
        if (customer.length > 0) {
            Promise.all(customer.map(async (item) => {
                //logger.info(item)
                const amount = await Transaction.find({ customer_phone: item.phone })
                if (amount.length > 0) {
                    item.amount = amount.length > 0 ? amount.reduce((x, y) => x.total + y.total) : 0;
                    const rankList = await Transaction.find({
                        level: {
                            $lte: item.amount
                        }
                    });
                    item.rank = rankList.lenth > 0 ? rankList.reduce((x, y) => x.amount >= y.amount ? x : y) : null;   
                } else {
                    item.rank = null;
                    item.amount = 0;
                }
                return item;
            })).then(() =>{
                return res.json({
                    success: true,
                    customer,
                })
            })
        }
        else {
            return res.json({
                success: true,
                customer: null
            })
        }
    })
}

//Find customer by phone number
export const GetCustomerByPhone = async (req, res) => {
    Customer.findOne({ "phone": req.params.phone }, (err, customer) => {
        if (err) {
            return res.json([
                {
                    success: false,
                    error: err.message,
                    message: "Lỗi server, vui lòng thử lại sau"
                }
            ])
        }
        return res.json([
            {
                success: true,
                list: customer
            }
        ])
    })
}

/*
    Get  a customer information with id of customer
    GET api/customer/:customerId
*/
export const GetCustomerById = async (req, res, next) => {
    Customer.findById((err, result) => {
        if (err) return next(err)
        res.json(result);
    })
}

/*
    Post information customer to database 
    POST api/customer
*/
export const CreateCustomer = async (req, res, next) => {
    //return res.json(req.body)
    if (!req.body.name || req.body.name == "") {
        return res.json({
            success: false,
            message: "Vui lòng cung cấp tên khách hàng"
        })
    } else if (!req.body.phone || req.body.phone == "") {
        return res.json({
            success: false,
            message: "Vui lòng cung cấp số điện thoại khách hàng"
        })
    }
    req.body.phone = req.body.phone.replace("+84", "0");
    Customer.findOne({ "phone": req.body.phone }, (err, result) => {
        if (err) return res.json(
            {
                success: false,
                error: err,
                message: "Lỗi server, vui lòng thử lại sau",
            }
        )
        if (result) {
            return res.json({
                success: false,
                message: "Số điện thoại này đã tồn tại!",
            }
            )
        } else {
            Customer.create(req.body, (err, post) => {
                if (err) return res.json(
                    {
                        success: false,
                        error: err.message,
                        message: "Lỗi server, vui lòng thử lại sau"
                    }
                )
                res.json(
                    {
                        success: true,
                        message: "Thêm khách hàng thành công"
                    }
                )
            })
        }
    })

}

/* 
    Update information od customer when somethings was wrong, find customer id of customer before update, if customerid doesn't exist => false
    Update api/customer/:customerid
*/

export const UpdateCustomer = async (req, res, next) => {
    Customer.findByIdAndUpdate(req.params.customerId, req.body, (err, update) => {
        if (err) return next(err)
        res.json(update)
    })
}


/* 
    Delete customer 
    DELETE api/customer/:customerid
*/

export const DeleteCustomer = async (req, res, next) => {
    if (!req.body.phone || req.body.phone == "") {
        return res.json({
            success: false,
            messsage: "Vui lòng cung cấp số điện thoại"
        })
    }
    Customer.findOneAndDelete({ phone: req.body.phone }, (err, del) => {
        if (err) return res.json({
            succes: false,
            error: err.message,
            message: "Lỗi server, vui lòng thử lại sau"
        })
        res.json({
            success: true,
            message: "Xóa khách hàng thành công"
        })
    })
}


//  API hiển thị các giao dịch của khách hàng theo khoảng thời gian xác định
export const getTransactionsByTime = async (req, res, next) => {
    try {
        const transactions = await Transaction.find({ customer_id: req.params.id, date_paid: { $gte: req.body.from_date, $lte: req.body.to_date } });
        res.status(200).json(transactions);
    } catch (err) {
        next(err);
    }
}

//API thống kê công nợ của khách hàng theo tháng/quý/ năm
export const getDebtsInMonth = async (req, res, next) => {
    try {
        const debts = await CustomerDebt.aggregate([
            { $addFields: { month: { $month: '$date_paid' } } },
            { $match: { customer_id: Number(req.params.id), month: Number(req.params.month) } }
        ]);
        res.status(200).json(debts);
    } catch (err) {
        next(err);
    }
}
