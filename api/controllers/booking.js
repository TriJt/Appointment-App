
import Bookings from "../models/Booking.js"; 
import Slot from "../models/Slot.js"

/* get all booking 
    GET api/booking/
*/
export const  getBookings = async (req,res,next)=>{ 
    Bookings.find((err,result)=> { 
        if(err) return next(err); 
        res.json(result)
    })
}

/*
    Get a booking with id booking
    GET api/booking/:booingId
*/

export const getBookingById = async(req,res,next)=>{ 
    console.log('Getting booking by ID: ', req,params.bookingId); 
    Bookings.findById(req.params.bookingId, (err, result)=> { 
        if(err) return next(err); 
        res.json(result); 
    })
}

/*
    Post booking in database
    POST api/booking/
*/

export const createBooking = async(req, res, next)=> { 
    console.log('Create booking registration for: ', req.body); 
    // before create booking in database 
    // update vacancies number of the slot booked

    const data  = req.body.data; 
    if(!data) return next(new Error('Invalid data. Booking object not found')); 
    if(!data.slot_id) return next(new Error('Invalid data. slot_id property not found')); 

    await Slot.findById(data.slot_id, function(err, slot){ 
        slot.vacancies -= data.quantity; 
        console.log("Slot vacancies updating to", slot.vacancies); 

        slot.save(function(err){ 
            if(err) { 
                console.log("Error when saving Slot", err); 
                return next(err)
            }

            // Slot saved and ready to create booking 
            Bookings.create(data, function (err, result) {
                if(err) { 
                    console.log('Error when creating Booking', err); 
                    return next(err)
                }
                res.json(result); 
              });
        });
    });
}; 

/*
    Update booking with id booking
    PUT api/booking/:bookingId
*/

export const updateBooking = async(req, res, next) => { 
    console.log('Update booking for client'); 
    Bookings.findByIdAndUpdate(req.params.bookingId, req.body.data, (err, result) => { 
        if(err) return next(err)
        res.json(result)
    })
}


/* 
    Detele booking with ud booking 
    DELETE api/booking/:bookingId
*/

export const deteleBookingById = async(req, res, next) => { 
    console.log('Detele Booking with ID', req.params.bookingId); 
    // Plus quantity to vacancies when deleting booking

            Bookings.findByIdAndDelete(data, function (err, result) {
                if(err) { 
                    console.log('Error when creating Booking', err); 
                    return next(err)
                }
                    // save slot after deleting booking
                    Slot.findById(data.slot_id, function(err,slot){ 
                        slot.vacancies += data.quantity; 
                        console.log("Slot vacancies updating to", slot.vacancies); 

                        slot.save(function(err) { 
                            if(err) { 
                                console.log("Error when saving Slot", err); 
                                return next(err)
                            }
                        })
                    })
                     res.json(result); 
              });

}