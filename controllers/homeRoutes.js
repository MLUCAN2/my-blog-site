// The home routes are what send the HTML to users 
const express= require('express');
const {User, Post, Comment}= require('../models')

// Get and render posts to homepage
router.get('/', async (req,res)=> {
    try {
        const postData= await Post.findAll({
            include: [User]
        });
        const posts = postData.map((post)=> post.get({plain: true}))
        res.render('homepage', {posts});
        res.status(200).json(postData);
    }
    catch(err) {
        res.status(500).json(err)
    }
});

// Get user data by id
router.get('/user/:id', async (req,res)=> {
    try {
        const userData= await User.findByPk(req.params.id)
        res.status(200).json(userData)
    }
    catch(err) {
        res.status(500).json(err)
    }
});


// Handles the rendering for the login page
router.get('/login', (req,res)=> {
    if (req.session.loggedIn){
        res.redirect('/');
        return;
    }
    res.render('login');
});

// Handles the rendering for the signup page
router.get('/signup', (req,res)=> {
    if (req.session.loggedIn){
        res.redirect('/');
        return;
    }
    res.render('signup');
});

module.exports= router;


