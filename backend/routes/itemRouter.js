import {Router} from 'express';
import {createItem, getItemById, getAllItems, deleteItem} from '../controllers/itemController.js';

const router = Router()
// default route is '/api/fruits'

// get all items
router.get('/', getAllItems)

//create item
router.post('/', createItem)

// get Item by id
router.get('/:id', getItemById);

// delte Item
router.delete('/:id', deleteItem)

// I can chain routers if their routes are the same
// router.route('/').get(getAllItems).post(createItem)
// router.route('/:id').get(getItemById).delete(deleteItem)

export default router