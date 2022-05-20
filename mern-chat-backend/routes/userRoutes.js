const router = require('express').Router();
const User = require('../models/User')

//creating a user

router.post('/', async(req,res)=>{
    try{
        const { name, email, password,picture } = req.body;
        console.log(req.body);
        const user = await User.create({name, email, password,picture});
        res.status(201).json(user);

    }catch(e){
        let msg;
        if(e.code ==11000){
            msg = "user already exists"
        }else{
            msg = e.message;
        }
        console.log(e);
        res.status(400).json(msg)
    }
})

//login user

router.get('/login', async(req,res)=>{
    try{
        const {email,password} = req.body;
        const user = await User.findByCredentials(email,password)
        user.status = 'online'
        res.status(200).json(user);
    }catch(e){
        res.status(400).json(e.message)
    }
})

module.exports = router