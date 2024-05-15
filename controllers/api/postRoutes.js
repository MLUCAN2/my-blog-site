const router = require('express').Router();
const {Post} = require('../../models');

router.post('/post', async (req,res)=> {
    if (!req.session.loggedIn) {
        res.status(400).send('Please login first or create a new account');
        return;
    }
    try {
        const newPost= await Post.create({
            content: req.body.content,
            username: req.body.username,
            post_id: req.body.post_id,
            user_id: req.session.user_id,
            date_created: req.body.date_created
        });
        res.status(200).json(newPost);
    }
    catch (err) {
        res.status(400).json(err);
    }
});

module.exports= router;

