import express from 'express';
import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductsByCategory,
} from '../controllers/productController.js';
import { authenticateToken, authorize } from '../middleware/auth.js';

const router = express.Router();

// Public routes
router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.get('/category/:category', getProductsByCategory);

// Admin routes
router.post('/', authenticateToken, authorize('admin_sales', 'super_admin'), createProduct);
router.put('/:id', authenticateToken, authorize('admin_sales', 'super_admin'), updateProduct);
router.delete('/:id', authenticateToken, authorize('super_admin'), deleteProduct);

export default router;
