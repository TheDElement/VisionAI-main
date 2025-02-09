const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model("User")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Post = require('../models/Post');
const multer = require('multer');
const upload = multer();

router.post('/Auth/signup', (req, res) => {
    const { name, email, password, profileImage, userName } = req.body
    if (!email || !password || !userName) {
        return res.status(422).json({ error: "Please add all the fields" })
    }
    User.findOne({ email: email })
        .then((savedUser) => {
            if (savedUser) {
                return res.status(422).json({ error: "user already exists with that email" })
            }
            bcrypt.hash(password, 15)
                .then(hashedpassword => {
                    const user = new User({
                        email,
                        password: hashedpassword,
                        name,
                        profileImage,
                        userName: userName.toLowerCase(),
                        bio: "",
                        followers: [],
                        following: []
                    })

                    user.save()
                        .then(user => {
                            const token = jwt.sign({ _id: user._id }, "Instagram@123");
                            const { _id, name, email, profileImage, userName, bio, followers, following } = user;
                            res.json({ token, user: { _id, name, email, profileImage, userName, bio, followers, following }, message: "Successfully signed up" });
                        })
                        .catch(error => {
                            console.log(error)
                        })
                })
        })

        .catch(err => {
            console.log(err)
        })
})

//username exist
router.post('/Auth/usernameexist', (req, res) => {
    const { userName } = req.body
    console.log(userName)
    if (!userName) {
        return res.status(422).json({ error: "Please add all the fields" })
    }
    User.findOne({ userName: userName })
        .then((savedUser) => {
            if (savedUser) {
                return res.json({ message: "User already exists with that name" })
            }
            res.json({ message: "User not exist" })
        })
        .catch(err => {
            console.log(err)
        })
})

//email exist
router.post('/Auth/useremailexist', (req, res) => {
    const { email } = req.body
    if (!email) {
        return res.status(422).json({ error: "Please add all the fields" })
    }
    User.findOne({ email: email })
        .then((savedUser) => {
            if (savedUser) {
                return res.json({ message: "User already exists with that email" })
            }
            res.json({ message: "User not exist" })
        })
        .catch(err => {
            console.log(err)
        })
})

router.post('/Auth/login', (req, res) => {
    const { emailOrUserName, password } = req.body
    if (!emailOrUserName || !password) {
        return res.status(422).json({ error: "Please add email or password" })
    }
    User.findOne({
        $or: [{ email: emailOrUserName }, { userName: emailOrUserName }]
    }).then(savedUser => {
        const errorMessage = "Invalid Email or Password"
        const errorMessage2 = "Invalid Credentials"
        if (!savedUser) {
            return res.status(422).json({ error: errorMessage, message: errorMessage })
        }
        bcrypt.compare(password, savedUser.password)
            .then(doMatch => {
                if (doMatch) {
                    const token = jwt.sign(
                        { userId: savedUser._id.toString() },
                        'Instagram@123'
                    )
                    const { _id, name, email, profileImage, userName, bio, followers, following } = savedUser;
                    res.json({ token, user: { _id, name, email, profileImage, userName, bio, followers, following }, message: "Successfully signed in" });
                } else {
                    return res.status(422).json({ error: errorMessage2 })
                }
            })
            .catch(err => {
                console.log(err)
            })
    })
});

router.post('/Posts/addposts', upload.none(), async (req, res) => {
    try {
        const { userId, feeds } = req.body;


        // Validate required fields
        if (!userId || !feeds) {
            return res.status(400).json({ error: 'userId and feeds are required' });
        }
        let feedsArray = feeds.split(',data:image').map((item, index) => {
            return index === 0 ? item : `data:image${item}`;
        });

        // Create a new post using the Post model
        const newPost = new Post({
            userId,
            feeds: feedsArray
        });

        // Save the new post to MongoDB
        await newPost.save();

        res.status(200).json({ message: 'Post created successfully', post: newPost });
    } catch (error) {
        console.error('Error creating post:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

//get all posts
router.get('/Posts', async (req, res) => {
    try {
        const posts = await Post.find();

        let newPosts = [];
        for (let i = 0; i < posts.length; i++) {
            const user = await User.findById(posts[i].userId);
            if (user)
                newPosts.push({ ...posts[i]._doc, userName: user.userName, profileImage: user.profileImage });
        }
        res.status(200).json({ posts: newPosts });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch posts' });
    }
});

//delete account by id
router.delete('/Users/:userId', async (req, res) => {
    try {
        const { userId } = req.params;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found.' });
        }
        await User.findByIdAndDelete(userId);
        res.status(200).json({ message: 'User deleted successfully.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to delete user.' });
    }
});

router.delete('/Posts/:postId', async (req, res) => {
    try {
        const { postId } = req.params;
        const { userId } = req.body;

        const post = await Post.findById(postId);

        if (!post) {
            return res.status(404).json({ error: 'Post not found.' });
        }

        if (post.userId.toString() !== userId) {
            return res.status(403).json({ error: 'Unauthorized to delete this post.' });
        }

        await Post.findByIdAndDelete(postId);
        res.status(200).json({ message: 'Post deleted successfully.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to delete post.' });
    }
});

router.get('/Users', upload.none(), async (req, res) => {
    try {
        const users = await User.find();

        const usersList = users.map((user) => {
            return { name: user.name, profileImage: user.profileImage, userName: user.userName, _id: user._id };
        });
        res.status(200).json({ usersList });
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal server error' });
    }

});

//getUserDetails 
router.get('/Users/:userId', async (req, res) => {
    try {
        const { userId } = req.params;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found.' });
        }
        res.status(200).json({ user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to get user details.' });
    }
});

//update user Name and Bio and profile image
router.put('/Users', upload.none(), async (req, res) => {
    try {
        const { userId, name, bio, profileImage } = req.body;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found.' });
        }
        user.name = name;
        user.bio = bio;
        user.profileImage = profileImage;
        await user.save();
        res.status(200).json({ message: 'Profile updated successfully', user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to update profile.' });
    }
});
router.put('/Users/follow', async (req, res) => {
    const followUser = await User.findByIdAndUpdate(req.body.followId, {
        $addToSet: { followers: req.body.user._id }
    }, { new: true })

    if (!followUser) {
        return res.status(404).json({ error: "User to follow not found" });
    }

    const currentUser = await User.findByIdAndUpdate(
        req.body.user._id,
        { $addToSet: { following: req.body.followId } },
        { new: true })

    if (!currentUser) {
        return res.status(404).json({ error: "Current user not found" });
    }

    res.status(200).json({ message: 'Followed successfully', followers: currentUser.followers, following: currentUser.following });
});
router.put('/Users/unfollow', async (req, res) => {
    const unfollowUser = await User.findByIdAndUpdate(req.body.unfollowId, {
        $pull: { followers: req.body.user._id }
    }, { new: true })

    if (!unfollowUser) {
        return res.status(404).json({ error: "User to unfollow not found" });
    }

    const currentUser = await User.findByIdAndUpdate(
        req.body.user._id,
        { $pull: { following: req.body.unfollowId } },
        { new: true })

    if (!currentUser) {
        return res.status(404).json({ error: "Current user not found" });
    }

    res.status(200).json({ message: 'Unfollowed successfully', followers: currentUser.followers, following: currentUser.following });
});
module.exports = router