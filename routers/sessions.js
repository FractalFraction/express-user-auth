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

  // const currentUser = User.findAll({
  //   where: {
  //     email: req.body.email
  //   }
  // })

  // if user exists, and using bcryptjs the password is equal to the password in the request body
  //if () {
    // add user id to the session
    // redirect to '/top-secret'
  //}
  //else {
    // render the same sign in form, with the error message
  //  res.render('sessions/new', { errors: ["???"] })
  //}
})

router.delete('/', (req, res) => {
  // delete the user id from the session
  res.redirect('/')
})

module.exports = router
