const jwt = require('jsonwebtoken')
const {JWT_Secret} = require('../keys')
const mongoose = require('mongoose')
const User = mongoose.model('User')


module.exports = (req, res, next) => {
    const {authorization} = req.headers
    // authorization === Beared 'user token'
    if(!authorization){
        return res.status(401).json({error: "you must be signed in"})
    }
    const token = authorization.replace('Bearer ', '')
    jwt.verify(token, JWT_Secret, (err, payload)=>{
        if(err){
            return res.status(401).json({error: 'you must be signed in'})
        }
        const {_id} = payload
        User.findById(_id).then(userdata => {
            req.user = userdata
            next()
        })
    })
}