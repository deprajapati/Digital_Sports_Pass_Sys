import express from 'express';
import { Login } from '../models/login.model.js'; // adjust path if needed

const router = express.Router();

// POST /api/signup - Signup route
router.post('/signup', async (req, res) => {
  const { username, phone, password } = req.body;

  try {
    // Check if user with given phone or username already exists
    const existingUser = await Login.findOne({
      $or: [
        { phone },
        { username }
      ]
    });
    if (existingUser) {
      return res.status(400).json({ message: 'Username or phone number already registered' });
    }

    // Create and save new user
    const newUser = new Login({ username, phone, password });
    await newUser.save();

    res.status(201).json({ message: 'Registration successful', user: newUser });
  } catch (err) {
    res.status(500).json({ message: 'Server error during registration', error: err.message });
  }
});

// POST /api/login - Login route
router.post('/login', async (req, res) => {
  const { loginId, password } = req.body; // loginId is username or phone

  try {
    // Find user by username or phone
    const user = await Login.findOne({
      $or: [
        { username: loginId },
        { phone: loginId }
      ]
    });

    if (!user || user.password !== password) {
      return res.status(400).json({ message: 'Invalid username/phone or password' });
    }

    res.status(200).json({
      message: 'Login successful',
      user: {
        username: user.username,
        phone: user.phone,
        _id: user._id,
      },
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error during login', error: err.message });
  }
});

export default router;
