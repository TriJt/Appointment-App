import { json } from 'express';
import Navigator from '../models/Navigator.js';

export const getNavigator = async(req, res, next) => {
    Navigator.find((err, result) => {
        if (err) return next(err);
        res.json(result);
    })
}

export const CreateNavigator = async(req, res, next) => {
    const newNavigator = new Navigator(req.body);

    try {
        const saveNavigator = await newNavigator.save();
        res.status(200).json(saveNavigator);
    } catch (err) {
        next(err);
    }
}