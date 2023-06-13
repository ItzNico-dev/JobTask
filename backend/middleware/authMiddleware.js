import jwt from 'jsonwebtoken';
import Admin from '../models/Admin.js';
export async function authMiddleware  (req, res, next)  {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const admin = await Admin.findById(decodedToken.adminId);
    if (!admin) {
      throw new Error();
    }
    req.admin = admin;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Unauthorized access' });
  }
};

