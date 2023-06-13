import Admin from '../models/Admin.js';
import jwt from 'jsonwebtoken';

export async function registerAdmin  (req, res, next)  {
  try {
    const { email, password } = req.body;

    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({ message: 'Admin already exists' });
    }

    const newAdmin = new Admin({ email, password });
    await newAdmin.save();

    const token = jwt.sign(
      {
        adminId: newAdmin._id,
        isAdmin: true,
      },
      process.env.JWT_SECRET
    );

    res.status(201).json({ message: 'Admin registered successfully', token });
  } catch (error) {
    next(error);
  }
};

export async function loginAdmin  (req, res, next)  {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(404).json({ message: 'Admin not found' });
    }

    const isPasswordMatch = await admin.isPasswordMatch(password);
    if (!isPasswordMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      {
        adminId: admin._id,
        isAdmin: true,
      },
      process.env.JWT_SECRET
    );

    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    next(error);
  }
};

