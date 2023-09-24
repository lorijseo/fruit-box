import {body, validationResult} from 'express-validator';
import User from '../models/userModel.js'

const withValidationErrors = (validateValues) => {
    return [validateValues, (req,res,next)=>{
        const errors = validationResult(req);
        if (errors.isEmpty()){
            next();
        }
        else{
            const errorMsgArr = errors.array();
            errorMsgArr.map((error) => error.msg);
            return res.status(401).json({errors:errorMsgArr})
        }
         
    } ]
}

export const validateTest = withValidationErrors([
    body('name')
    .notEmpty()
    .withMessage('name is required')
    .isLength({min:3, max:10})
    .custom(async (email) => {
        const user = await User.findOne({email});
        if(user){
            res.status(400).json({error: "username is already used"})
        }
    }),
]);

export const validateRegistration = withValidationErrors([
    body('username')
    .notEmpty()
    .withMessage('username is required')
    .isLength({min:3, max:10})
    .withMessage('username must be between 3 and 10 characters'),

    body('password')
    .notEmpty()
    .withMessage('password is required')
    .isLength({min:3, max:10})
    .withMessage('password must be between 3 and 10 characters'),

    body('email')
    .notEmpty()
    .withMessage('email is required')
    .isEmail()
    .withMessage('Invalid email')
    .custom(async (email) => {
        const user = await User.findOne({email});
        if(user){
            res.status(400).json({error: "email is already used"})
        }
    }),

    body('location')
    .notEmpty()
    .withMessage('location is required'),

])


export const validateLogin = withValidationErrors([
    body('username')
    .notEmpty()
    .withMessage('username is required')
    .isLength({min:3, max:10})
    .withMessage('username must be between 3 and 10 characters'),

    body('password')
    .notEmpty()
    .withMessage('password is required')
    .isLength({min:3, max:10})
    .withMessage('password must be between 3 and 10 characters'),

    // body('email')
    // .notEmpty()
    // .withMessage('email is required')
    // .isEmail()
    // .withMessage('Invalid email'),

])