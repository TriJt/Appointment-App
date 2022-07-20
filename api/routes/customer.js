import express from "express";
import {GetCustomer,
       GetCustomerById,
       CreateCustomer,
       UpdateCustomer,
       DeleteCustomer,
       getTransactionsByTime,
       getDebtsInMonth
} from "../controllers/customer.js"; 

const router = express.Router(); 

//router for get all customer to table in page list customer
router.get("/",GetCustomer); 

//router for get one customer with id
router.get("/:customerId", GetCustomerById)

//router for post customer
router.post("/", CreateCustomer); 

//router for update customer
router.put("/:customerId",UpdateCustomer); 

//router for delete customer
router.delete("/", DeleteCustomer);

//router for get transactions by time of customer
// req.body:
// { 
//    from_date: Date,
//    to_date: Date
// }
router.get("/transactions/:id", getTransactionsByTime);

//router for get debts in specific month of customer
// req body:
// { 
//    from_date: Date,
//    to_date: Date
// }
router.get("/debts/:id/:month", getDebtsInMonth);

export default router; 