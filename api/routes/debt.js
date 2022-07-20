import express from "express"; 
import { 
    CreateDebt,
    UpdateDebt,
    DeleteDebt,
    GetDebtById,
    GetDebtsByMonth,
    GetDebts
} from "../controllers/debt.js"

const router = express.Router(); 

//router for create debt receipt
// req.body : {
//     debtee_name: {
//         type: String,
//         ref: 'Debtee'
//     },
//     debtee_phone: {
//         type: String,
//         ref: 'Debtee'
//     },
//     state: {
//         type: String,
//         enum: ['Đã trả xong','Đã trả một phần','Chưa trả']
//     },
//     interest_rate: Number,
//     paid: Number, //Đã trả
//     owed: Number, //Còn nợ
//     total: Number,
//     date_paid: {
//        type: Date,
//        default: new Date().toLocaleDateString('en-US', { timeZone: 'Asia/Ho_Chi_Minh'}),
//    }, //Ngày trả cuối
//     description: String
// }
router.post("/",CreateDebt); 

//router for update debt receipt
router.put("/:debtid", UpdateDebt); 

//router for delete debt receipt 
router.delete("/:debtid", DeleteDebt); 

//router for get an debt receipt with id
router.get("/:debtid",GetDebtById); 

//router for get all debt receipts
router.get("/",GetDebts); 

//router for get all debt receipts in a month
router.get("/month/:month",GetDebtsByMonth); 

//router for get statistic of debt receipts in a month
//router.get("/statistic/:month",GetStatisticByMonth); 

export default router ; 
