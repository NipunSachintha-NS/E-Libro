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


 router.post("/login", (req,res) =>{
    const {name, password} = req.body;
     UserModel.findOne({name:name})
    .then(user => {
        if(user) {
            bcrypt.compare(password,user.password, (err, response) =>{   
                 if(response) {
                    res.json("Login Succussfuly")     
                } else {
                    res.json("The password is incorrect")  
                }
          })

        } else {
            res.json("No record existed")  
        }
    }).catch(err => console.log(err))
})


module.exports = router;