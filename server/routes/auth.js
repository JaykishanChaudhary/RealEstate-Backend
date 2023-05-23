const express = require('express')
const mongoose = require('mongoose')
const User = mongoose.model('User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {JWT_Secret} = require('../keys')

const router = express.Router()

const requireLogin = require('../middleware/requireLogin')

// router.get('/protected',requireLogin, (req, res) => {
//     res.send('Add Property')
// })

router.post('/signup', (req, res) => {
    const {email, password, confirmpassword} = req.body
    if(!email || !password || !confirmpassword){
        return res.status(422).json({error:'all fields are required'})
    }else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
        return res.status(422).json({error:"Invalid email"})
    }else if(password !== confirmpassword){
        return res.status(422).json({error:'password does not match'})
    }else if(req.body.password.length < 8){
        return res.status(422).json({error:'password length should be more than 8 characters'})
    }
    
    User.findOne({email:email})
    .then((savedUser) => {
        if(savedUser){
            return res.status(422).json({error:'email Id already exist'})
        }

        bcrypt.hash(password,12)
        .then(hashedPasswor => {
            const newUser = new User({
                email,
                password:hashedPasswor,
                confirmpassword
            })
    
            newUser.save()
            .then(() => {
                res.json({message:'Signed Up successfully'})
            })
            .catch(error => {
                console.log(error)
            })
        })
    })
    .catch(error => {
        console.log(error)
    })
})


router.post('/signin', (req, res) => {
    const {email, password} = req.body;
    if(!email || !password) {
        return res.status(422).json({error:'All fields are mandatory'})
    }
    User.findOne({email:email})
    .then(savedUser => {
        if(!savedUser){
            return res.status(422).json({error: 'Invalid Email or password'})
        }
        bcrypt.compare(password, savedUser.password)
        .then(isMatched => {
            if(isMatched){
                // res.json({message:'Signed-In successfully'})
                const token = jwt.sign({_id:savedUser._id}, JWT_Secret)
                const {_id,email} = savedUser
                res.json({token, user:{_id, email}})
            }else{
                return res.status(422).json({error: 'Invalid Email or password'})
            }
        })
        .catch(error => {
            console.log(error)
        })
    })
})

module.exports = router