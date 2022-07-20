import express from "express"; 
import { 
    CreateTransaction,
    UpdateTransaction,
    DeleteTransaction,
    GetTransactionById,
    GetTransactions,
    GetOrderOfTransaction,
    GetCustomerInfoByTransaction,
    GetEmployeeInfoByTransaction,
    GetTransactionsByTime
} from "../controllers/transaction.js"

const router = express.Router(); 

//router for create a transaction
router.post("/",CreateTransaction); 

//router for update a transaction
router.put("/:transactionid", UpdateTransaction); 

//router for delete a transaction 
router.delete("/:transactionid", DeleteTransaction); 

//router for get an a transaction with id
router.get("/:transactionid",GetTransactionById); 

//router for get all transactions
router.get("/",GetTransactions); 

//router for get the order of a transaction
router.get("/:transactionid/order",GetOrderOfTransaction); 

//router for get customer information of a transaction
router.get("/:transactionid/customer_info",GetCustomerInfoByTransaction); 

//router for get employee information of a transaction
router.get("/:transactionid/emp_info",GetEmployeeInfoByTransaction); 

//router for get all transactions of spa in a specific time
// req body:
// { 
//    from_date: Date,
//    to_date: Date
// }
router.get("/bytime", GetTransactionsByTime);

export default router ; 
