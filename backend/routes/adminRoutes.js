import express from 'express';
const router = express.Router();
import { authMiddleware } from '../middleware/authMiddleware.js';
import { registerAdmin, loginAdmin } from '../controllers/authController.js';

router.post('/admin', authMiddleware, registerAdmin);
router.post('/admin', authMiddleware, loginAdmin);

export default router
