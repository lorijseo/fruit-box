import {Router} from 'express';
const router = Router();
import { getUser } from '../controllers/userController.js';
import {authenticateUser} from '../middleware/authMiddleware.js'


// create user
router.get('/current-user', authenticateUser, getUser);

//get user by id, delete user
// router.get('/admin');

// router.patch('/update-user')

export default router