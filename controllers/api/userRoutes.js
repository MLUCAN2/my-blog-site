const router= require('express').Router ();
const {User}= require('../../models')

// Create a new user
router.post('/createUser', async (req,res)=> {
    try {
        // Makes it a requirement to create an account
        if (!req.body.email || !req.body.username || !req.body.password) {
            res.status(400).json({message: 'Please enter an email, username, and password'});
            return;
        }
        
        // Check if the user exists
        const existingUser= await User.findOne(
            {
                where: {email: req.body.email}
            });
        if (existingUser) {
            res.status(400).json({message: 'User already exists'})
            return;
        }
      
        // Create the actual user
        const newUser= await User.create ({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });

        req.session.save(()=> {
            req.session.user_id= newUser.id;
            req.session.username= newUser.username;
            req.session.loggedIn= true;
            res.status(200).json({
                user: newUser,
                message: 'You are now logged in!'
            });
        });
    }
    catch (err) {
        console.error('Could not register new user', err);
        res.status(500).json(err);
    }   
});

module.exports= router
