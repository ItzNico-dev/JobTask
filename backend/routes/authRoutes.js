import express from 'express';

const router = express.Router();
import { registerAdmin, loginAdmin } from '../controllers/authController.js';

router.post('/admin/register', registerAdmin);
router.post('/admin/login', loginAdmin);

export default router;
