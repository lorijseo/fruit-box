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
    res.status(200).json({msg:"not authorized token"})
    throw new Error('not authorized token')
  }
  else{
    try {
      const {userId, role}= verifyJWT(token);
      req.user = {userId, role}
      next();
    } catch (error) {
      res.status(200).json({msg:"not authorized token"})
      throw new Error('not authorized token')
    }
  }
};

// export const authenticateUser = (req, res, next) => {
//   const { token } = req.cookies;
//   if (token){
//     try {
//       const {userId, role}= verifyJWT(token);
//       req.user = {userId, role}
//       next();
//     } catch (error) {
//       throw new Error('not authorized token')
//     }
//   }
//   else{
//     console.log('no token');
//     return null
//   }

// };