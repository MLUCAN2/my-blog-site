const router = require('express').Router();
const {Comment} = require('../../models');

router.post('/comment', async (req,res)=> {
    if (!req.session.loggedIn) {
        res.status(400).send('Please login first or create a new account');
        return;
    }
    try {
        const newComment= await Comment.create({
            content: req.body.content,
            post_id: req.body.post_id,
            user_id: req.session.user_id,
        });
        res.status(200).json(newComment);
    }
    catch (err) {
        console.error('Error on comment route', err)
        res.status(400).json(err);
    }
});

module.exports= router;
