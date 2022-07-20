import express from 'express'
import mongoose from 'mongoose';
import Slot from '../models/Slot.js'; 

const router = express.Router({mergeParams:true}); 

/* 
GET /api/services/:serviceId/availability/dates/:date?quantity
Get all dates from a year-month that have available slots for a specific service
*/ 

export const AvailableDates = async(req, res,next) =>{ 
    console.log('Getting all dates from '+req.params.date+' that have available slots for '+req.query.quantity+' people for service id: '+req.params.serviceId);

    if(/^\d{4} - \d{1,2}/.test(req.params.date)){ 
        var date = req.params.date.split('-'); 
        start = new Date(date[0], date[1]-1,1); 
        var end = new Date(req.params.date); 
        end = new Date(end.getFullYear(), start.getUTCMonth()+1, 1); 
    }else{ 
        return next(new Error('Invalid date param. It should be in YYYY-MM format.')); 
    }

    // Return only dates from today 
    const quantity = req.query.quantity || 1 ; 
    // Any slot available with date greater than this month and less than the next month

    Slot.aggregate([
       // Filtering pipeline
       { $match:{ 
            service_id: mongoose.Types.ObjectId(req.params.serviceId), 
            vacancies: { $gte: (+quantity)}, 
            date: {$gte: start,$lt: end }
       }}, 
       //Grouping pipeline
       { $group: { 
           _id: {
               $year: { $year: "$date"}, 
               $month: {$month: "$date"},
               day: { $dayOfMonth: "$date"}
           }, 
           minPrice: { $min: '$price'}, 
           count: {$sum: 1}
       }}, 
       {
        $sort:{"_id.day": 1}
       }
    ]).exec( (err,list) => {
        if(err) return next(err); 
        res.json(list); 
    }); 

}


/*
GET /api/services/:serviceId/availability/slots?date&quantity
Get all available slots from a date a specific service

*/

export const AvailableSlot  = async(req,res,next) => { 
    console.log('Getting slots available for'+req.params.quantity+' people at '+req.query.date+'  for service id: '+req.params.serviceId);

    if(/^\d{4}-\d{1,2}-\d{1,2}/.test(req.params.date)){ 
        var start = new Date(req.query.date); 
        var end = new Date(req.query.date); 
        end.setDate(end.getDate() +1); 
    }else{ 
        return next(new Error('Invalid date param. It should be in YYYY-MM-DD format.')); 
    }

    var quantity = req.query.quantity || 1 ;

    // Match same date without time 
    Slot.find({ 
        service_id: req.params.serviceId, 
        vacancies: {$gte: (+quantity)}, 
        date: {$gte: start, $lt: end}
    }).exec( (err,list) => { 
        if(err)return next(err)
        res.json(list)
    });

};

// GET ONE SLOTS

export const GetSlot = async(req,res,next) => { 
    Slot.findById(req.params.id, (err,result)=>{ 
        if(err) return next(err);
        res.json(result)
    });
};