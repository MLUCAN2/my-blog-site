const router = require('express').Router();
const {Post} = require('../../models');

router.post('/post', async (req,res)=> {
    if (!req.session.loggedIn) {
        res.status(400).send('Please login first or create a new account');
        return;
    }
    try {
        const newPost= await Post.create({
            title: req.body.title,
            content: req.body.content,
            user_id: req.session.user_id,
        });
        res.status(200).json(newPost);
    }
    catch (err) {
        console.error('Error on post route', err)
        res.status(400).json(err);
    }
});

module.exports= router;

