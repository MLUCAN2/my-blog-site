const sequelize= require('../config/connection');
const {User, Post, Comment}= require ('../models')

const usersData= require('./users.json');
const postsData = require('./posts.json');
const commentsData = require('./comments.json');
//handles the seeding process
const seedDatabase= async ()=>{
    try{
    // ensures the tables match then drops/recreates them
    await sequelize.sync({force:true});

    // creates the account
    await User.bulkCreate(usersData, {
        individualHooks:true, //makes sure to execute the hooks in the model, specifically our password
        returning: true, // returns the tables
    });

    // creates the developer account
    await Post.bulkCreate(postsData, {
        returning: true
    });

    await Comment.bulkCreate(commentsData, {
        returning: true
    });
    
    console.log('Database has been seeded');
    }
    catch (error) {
        console.error('Could not seed database', error)
    }
    process.exit(0);
};
seedDatabase();

