const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.signup = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ msg: 'User already exists' });

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ msg: 'User created successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};


exports.login = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Check if user exists
      const user = await User.findOne({ email });
      if (!user) return res.status(400).json({ msg: 'Invalid credentials' });
  
      // Compare password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });
  
      // Create JWT
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: '2h',
      });
  
      res.json({ token });
    } catch (err) {
      console.error(err);
      res.status(500).json({ msg: 'Server error' });
    }
  };
  