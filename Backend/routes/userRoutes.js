const express = require('express');
const bcrypt = require('bcrypt');
const UserModel = require('../models/user');
const router = express.Router();



router.post('/signup', (req, res) => {
    const {name, contactNo, password} = req.body;
    bcrypt.hash(password, 10)
    .then(hash => {
        UserModel.create({name, contactNo, password:hash })
            .then(user => res.json(user))
            .catch(err => res.json(err))  
    }).catch(err => console.log(err.message))
      
 }) 


module.exports = router;