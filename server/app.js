const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = 6452
const { MONGOURI } = require('./keys')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const session = require('express-session')
const User = require('./models/user.js')
const postRoutes = require('./routes/posts')
const userRoutes = require('./routes/users')
const gptRoutes = require('./routes/gpt')
require('dotenv').config()

require('./models/user')

app.use(express.json())
app.use(require('./routes/auth'))
app.use(express.json())

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    User.findOne({ username: username, password: password }, (err, user) => {
        if (err || !user) {
            return res.status(401).json({ error: 'Invalid username or password' });
        }
        req.session.userId = user._id;
        req.session.username = user.username;

        res.json({ message: 'Logged in successfully', user: { username: user.username } });
    });
});

app.put('/follow', (req, res) => {
    if (!req.session.userId) {
        return res.status(401).json({ error: 'Unauthorized: Please login first' });
    }
});
app.post('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to logout' });
        }
        res.json({ message: 'Logged out successfully' });
    });
});
app.put('/unfollow', (req, res) => {
    if (!req.session.userId) {
        return res.status(401).json({ error: 'Unauthorized: Please logout first' });
    }
});

function isValidUsername(username) {

    const usernameRegex = /^[a-zA-Z0-9._]{3,30}$/
    return usernameRegex.test(username)
};

mongoose.connect(MONGOURI)
mongoose.connection.on('connected', () => {
    console.log("connected to mongo..")
})
mongoose.connection.on('error', (err) => {
    console.log("err connecting", err)
})
app.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;


    if (!isValidUsername(username)) {
        return res.status(422).json({ message: 'Invalid username format. Username must contain only letters, numbers, dots, or underscores and be between 3 and 30 characters.' });
    }
    try {
        const existingUser = await User.findOne({ username })
        if (existingUser) {
            return res.status(422).json({ message: 'Username is already taken' })
        }

        const existingEmail = await User.findOne({ email })
        if (existingEmail) {
            return res.status(422).json({ message: 'Email is already registered' })
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = new User({
            username,
            email,
            password: hashedPassword
        })
        await newUser.save()
        res.status(201).json({ message: 'User registered successfully' })
    } catch (error) {
        console.error('Signup error:', error)
        res.status(422).json({ message: 'Server error' })
    }
})

app.use('/api/posts', postRoutes);

app.use('/api/users', userRoutes);

app.use('/api/gpt', gptRoutes)

app.listen(PORT, () => {
    console.log("sever is running on", PORT)
})