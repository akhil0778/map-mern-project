const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/Users');

const register = async (req, res) => {
    const { name, username, email, password } = req.body;

    if (!name || !username || !password || !email) {
        return res.status(400).json({ error: "All Fields are Required" });
    }

    try {
        User.findByUsername(username, async (err, existingUser) => {
            if (err) {
                return res.status(500).json({ error: "Database error" });
            }
            if (existingUser) {
                return res.status(400).json({ error: "User Already Exists" });
            }

            const hashedPassword = await bcrypt.hash(password, 10);
            User.create(username, hashedPassword, (err) => {
                if (err) {
                    return res.status(500).json({ error: "Error creating user" });
                }
                return res.status(201).json({ message: "User Created Successfully" });
            });
        });
    } catch (error) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

const login = (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: "All Fields Required" });
    }

    User.findByUsername(username, async (err, user) => {
        if (err) {
            return res.status(500).json({ error: "Database Error" });
        }
        if (!user) {
            return res.status(400).json({ error: "Invalid username or password" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: "Invalid username or password" });
        }

        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: 'strict',
        });

        return res.json({ message: "Login successful", token });
    });
};

const logout = (req, res) => {
    res.clearCookie('token');
    return res.json({ message: 'Logout Successful' });
};

module.exports = { register, login, logout };