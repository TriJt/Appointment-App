import express from "express";
import {AvailableDates, AvailableSlot,GetSlot} from "../controllers/availability.js"
const router = express.Router({mergeParams: true})


/* GET /api/services/:serviceId/availability/dates/:date?quantity
	return all dates from a year-month that have available slots for a specific service
*/
router.get('/dates/:date',AvailableDates);

/* GET /api/services/:serviceId/availability/slots?date&quantity
	return all available slots from a date for a specific service
*/
router.get('/slots', AvailableSlot);

/*  "/api/services/:serviceId/slots/:id"
     GET: 
 */
router.get('/:id',GetSlot); 
module.exports = router; 