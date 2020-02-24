const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const keys = require("../../config/keys");
const jwt = require('jsonwebtoken');
const passport = require('passport');
const validateRegisterInput = require("../../validation/user/register");
const validateLoginInput = require("../../validation/user/login");

router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
    // res.json({
    //   id: req.user.id,
    //   handle: req.user.handle,
    //   email: req.user.email
    // })
    res.send(req.user);
})

router.post ("/register", (req, res)=>{
    const { errors, isValid } = validateRegisterInput(req.body);

    if(!isValid){return res.status(400).json(errors)}

    User.findOne({email: req.body.email})
        .then(user => {
            if(user){
                errors.email = "Email already exists";
                return res.status(400).json(errors);
            } else {
                const newUser = new User({
                    username: req.body.username,
                    email: req.body.email,
                    password: req.body.password
                })
                bcrypt.genSalt(10, (err, salt) =>{
                    if (err) throw err;
                    bcrypt.hash(newUser.password, salt, (err,hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        newUser.save()
                            .then( user => {
                                payload = {id: user.id, username: user.username};
                                jwt.sign(payload, keys.secretOrKey, {expiresIn: 3600}, (err, token)=>{
                                    res.json({
                                        success: true,
                                        token: "Bearer " + token
                                    })
                                })
                            })
                            .catch( err => console.log(err) );
                    })
                })

            }
        })
})

router.post ('/login', (req, res) => {
    const {errors, isValid} = validateLoginInput(req.body);
    
    if (!isValid) {return res.status(400).json(errors)}

    User.findOne({email: req.body.email})
        .then(user=> {
            if (!user){
                errors.email = "Email not found in database";
                return res.status(404).json(errors);
            }
            bcrypt.compare(req.body.password, user.password)
                .then( isMatch => {
                    const payload = {id: user.id, username: user.username}
                    if (isMatch){
                        jwt.sign(
                        payload,
                        keys.secretOrKey,
                        { expiresIn: 3600 },
                        (err, token) => {
                            res.json({
                            success: true,
                            token: "Bearer " + token
                            });
                        }
                        );
                    } else {
                        errors.password = "Incorrect password";
                        return res.status(400).json(errors);
                    }
                })
    })
})

module.exports = router;