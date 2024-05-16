const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});
User.hasMany(Comment,{
    foreignKey: 'userId',
})

Post.belongsTo(User, {
    foreignKey: 'user_id'
});
Comment.belongsTo(User, {
    foreignKey: 'userId',
});
Comment.belongsTo(Post, {
    foreignKey: 'postId',
})
Post.hasMany(Comment, {
    foreignKey: 'postId',
});


module.exports = {User, Post, Comment}


// onDelete: if our user is deleted so is their posts
// foreignKey: connects the post to the user