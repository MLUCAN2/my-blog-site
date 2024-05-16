const router = require('express').Router();
const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes');
const userRoutes= require('./userRoutes');

router.use('/users', userRoutes);
router.use('/comments', commentRoutes);
router.use('/posts', postRoutes);

module.exports = router;