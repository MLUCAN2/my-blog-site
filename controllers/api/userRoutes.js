const express= require('express');
const {User}= require('../models')
const router= express.Router();



router.post('/', async (req,res)=> {
    try {
        const userData= await User.create(req.body)
        res.status(200).json(userData)
    }
    catch(err) {
        res.status(500).json(err)
    }
});

module.exports= router
