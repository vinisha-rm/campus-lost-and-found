import { Router } from 'express';
import { getItems, getItemById, createItem, updateItem, deleteItem } from '../controllers/itemscontroller.js';
import { protect, admin } from '../middleware/authmiddleware.js';

const router = Router();

// Public routes
router.get('/', getItems);
router.get('/:id', getItemById);

// Protected routes
router.post('/', protect, createItem);
router.put('/:id', protect, updateItem);
router.delete('/:id', protect, admin, deleteItem);

export default router;
