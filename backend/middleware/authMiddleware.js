// export const authenticateUser = (req,res,next) => {
//     const {token} = req.cookies;
//     if(!token){
//         console.log(error)
//     }
//     console.log(req.cookies)
//     next();
// }

import { verifyJWT } from '../token.js'

export const authenticateUser = (req, res, next) => {
  const { token } = req.cookies;
  if (!token){
    console.log('no token');
    // throw new Error('not authorized token')
  };

  try {
    const {userId, role}= verifyJWT(token);
    req.user = {userId, role}
    next();
  } catch (error) {
    throw new Error('not authorized token')
    console.log('error');
  }
};