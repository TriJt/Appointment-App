import { json } from "express";
import Branch from "../models/Branch.js";
import winston from 'winston';
import mongoose from 'mongoose'; 


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

export const CreateBranch = async (req, res, next) => {
    Branch.create(req.body, (err, post) => {
        if (err) return res.json({
            error: true,
            message: "Internal server error, please try again later.",
        });
        return res.json({
            error: false,
            message: "Successfully created",
        })
    })
}

export const GetAllBranch = async (req, res, next) => {
    Branch.find((err, branch) => {
        if (err) return res.json({
            error: true,
            message: "Internal server error, please try again later.",
        })
        return res.json(branch);
    })
}

export const InsertBooking = async (req, res) => {
    logger.info(req.body)
    
        if (req.body.branchId && req.body.branchId == "") {
            return res.json([
                {
                    error: true,
                    message: "Vui lòng chọn chi nhánh",
                }
            ])
        } else if (req.body.customer && req.body.customer == "") {
            return res.json([
                {
                    error: true,
                    message: "Vui lòng nhập họ và tên"
                }
            ])
        } else if (req.body.phoneNumber && req.body.phoneNumber == "") {
            return res.json([
                {
                    error: true,
                    message: "Vui lòng nhập số điện thoại",
                }
            ])
        } else if (req.body.date && req.body.date == "") {
            return res.json([
                {
                    error: true,
                    message: "Vui lòng chọn thời gian"
                }
            ])
        }  else if (new Date(req.body.date).getHours() < 8 || new Date(req.body.date).getHours() > 16) {
            return res.json([
                {
                    error: true,
                    message: "Vui lòng chọn thời gian từ 8h đến 16h hàng ngày"
                }
            ])
        } else if (req.body.service && req.body.service == "") {
            return res.json([
                {
                    error: true,
                    message: "Vui lòng chọn dịch vụ"
                }
            ])
        } else {
            try {
                const query = { _id: req.body.branchId};
                const obj = {
                    customer: req.body.customer,
                    phone: req.body.phoneNumber,
                    service: req.body.service,
                    date: req.body.date,
                    note: req.body.note,
                }
                const update = {
                    $push: {
                        booking: obj
                    }
                }
                Branch.updateOne({ _id: req.body.branchId}, {
                    $push: {
                        "booking": {
                            customer: req.body.customer,
                            phone: req.body.phoneNumber,
                            service: req.body.service,
                            date: new Date(req.body.date),
                            note: req.body.note,
                        }
                    }
                }, (err, result) => {
                    if (err) {
                        return res.json([{
                            error: true,
                            message: "Lỗi server"
                    }])
                    }
                    return res.json([
                        {
                            error: false,
                            message: "Booking thành công",
                            res: req.body.date,
                        }
                    ])
                })
                


            } catch (err) {
                return res.json([
                    {
                        error: true,
                        message: "Internal server error: " + err.message,
                       
                    }
                ])
            }
        }
}

export const confirmBooking = (req, res) => {
    
}