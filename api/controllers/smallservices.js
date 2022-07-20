import SmallServices from "../models/SmallService.js";
import Services from "../models/Service.js";
import { json } from "express";
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
    Get all smallservice
    GET api/smallservice
*/
export const GetSmallServices = async (req, res, next) => {
    logger.info(req.body)
    Services.findOne({ _id: req.body.serviceId }, (err, result) => {
        if (err) return next(err)

        if (result.smallservice && result.smallservice.length > 0) Promise.all(result.smallservice.map(item => {

            return SmallServices.findOne({ _id: item }, (error, record) => {
                if (error) return next(error);
                return record;

            }).clone();
        })).then(final => {
            res.json(final);
        });
        else res.json(null);
        //logger.info(finalRes);

    })

}


/*
    Get one service with id service
    GET api/smallservice/:id
*/


export const GetSmallServicesById = async (req, res, next) => {

    SmallServices.findById(req.params.id, (err, result) => {
        if (err) return next(err)
        res.json(result);
    })
}

/*
Post  a service to database
POST api/smallservice
when post smallservice, id smallservice will be add into service 
*/

export const CreatSmallService = async (req, res, next) => {
    const ServiceId = req.params.serviceid;
    const newSmallService = new SmallServices(req.body);
    try {
        const saveSmallService = await newSmallService.save();
        try {
            await Services.findByIdAndUpdate(ServiceId, {
                $push: { smallservice: saveSmallService._id },
            });
        } catch (err) {
            next(err);
        }
        res.status(200).json(saveSmallService);
    } catch (err) {
        next(err)
    }

}



/* 
Put a smallservice in database
PUT api/smallservice/:id
*/

export const UpdateSmallService = async (req, res, next) => {
    try {
        const updateSmall = await SmallServices.findByIdAndUpdate(req.params.id,
            { $set: req.body },
            { new: true });
        res.status(200).json(updateSmall)
    }
    catch (err) {
        next(err);
    }

}

/*
Delete smallservice in database 
DELETE api/smallservice/:id 
*/

export const DeleteSmallServiceById = async (req, res, next) => {
    try {
        // xóa smallservice 
        await SmallServices.findByIdAndDelete(req.params.id);
        // tìm id smallservice trong service và xóa nó đi
        try {
            const service = await Services.findOne({ smallservice: req.params.id });
            if (service != null) {
                await Services.findByIdAndUpdate(service.id, {
                    $pull: { smallservice: req.params.id }
                })
            }
        } catch (err) {
            next(err)
        }
    }
    catch (err) {
        next(err);
    }
}