const express = require('express')
const router = express.Router({mergeParams: true})
const { User } = require('../models')
// require module 'bcryptjs'
const bcrypt = require('bcryptjs')

router.get('/new', (req, res) => {
  res.render('sessions/new')
})

router.post('/', async (req, res) => {
  // find user by email

  const currentUser = await User.findOne({
    where: {
      email: req.body.email
    }
  })

  console.log(currentUser);
  //console.log(

  // if user exists, and using bcryptjs the password is equal to the password in the request body
  if (currentUser && bcrypt.compareSync(req.body.password, currentUser.passwordHash)) {
    //add user id to the session
    req.session.userId = currentUser.id;
    //redirect to '/top-secret'
    res.redirect('/top-secret');
  }
  else {
    //render the same sign in form, with the error message
   res.render('sessions/new', { errors: ["sorry, details not valid"] })
  }
})

router.delete('/', (req, res) => {

  delete req.session.userId
  // delete the user id from the session
  
  res.redirect('/')
})

module.exports = router
