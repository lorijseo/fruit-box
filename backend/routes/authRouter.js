import {Router} from 'express';
const router = Router();
import { userLogin, userRegister, userLogout} from '../controllers/authController.js';
import { validateRegistration, validateLogin } from "../middleware/validateMiddleware.js";


// create user
router.post('/register', validateRegistration, userRegister);

//get user by id, delete user
router.post('/login', validateLogin, userLogin);

router.get('/logout', userLogout)

export default router