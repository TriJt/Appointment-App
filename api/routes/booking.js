import express from "express";
import {getBookings as get,
getBookingById as getid, 
createBooking as create, 
updateBooking as update , 
deteleBookingById as deletes} from "../controllers/booking.js"; 

const router = express.Router(); 

//router for get all Bookings
router.get("/",get); 

//router for get one Booking with id
router.get("/:bookingId", getid)

//router for post Booking 
router.post("/", create); 

//router for put Booking
router.put("/:bookingId",update); 

//router for delete Booking
router.delete("/:bookingId", deletes)

export default  router; 