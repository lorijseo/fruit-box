import 'dotenv/config'
import jwt from 'jsonwebtoken';

//send token to frontend
//front end send token with every request from cookie
//server decode token
//
export function createJWT(payload){
    const token = jwt.sign(payload, process.env.JWT_KEY, {
        expiresIn: process.env.JWT_EXPIRES_IN,
    });
    return token
}

export function verifyJWT(token){
    const decodedToken = jwt.verify(token, process.env.JWT_KEY)
    return decodedToken
}
