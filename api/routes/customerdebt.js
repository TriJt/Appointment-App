import express from "express"; 
import { 
    CreateCustomerDebt,
    UpdateCustomerDebt,
    DeleteCustomerDebt,
    GetCustomerDebtById,
    GetCustomerDebtsByMonth,
    GetCustomerDebts,
    GetCustomerDebtsByQuarter,
    GetCustomerDebtsByYear
} from "../controllers/customerdebt.js"

const router = express.Router(); 

//router for create a customer debt receipt
router.post("/",CreateCustomerDebt); 

//router for update a customer debt receipt
router.put("/:debtid", UpdateCustomerDebt); 

//router for delete a customer debt receipt 
router.delete("/:debtid", DeleteCustomerDebt); 

//router for get an a customer debt receipt with id
router.get("/:debtid",GetCustomerDebtById); 

//router for get all a customer debt receipts
router.get("/",GetCustomerDebts); 

//router for get all a customer debt receipts in a month
router.get("/month/:month",GetCustomerDebtsByMonth); 

//router for get all a customer debt receipts in a quarter
router.get("/quarter/:quarter",GetCustomerDebtsByQuarter); 

//router for get all a customer debt receipts in a year
router.get("/year/:year",GetCustomerDebtsByYear); 

export default router ; 
