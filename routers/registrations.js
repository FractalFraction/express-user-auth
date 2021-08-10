const express = require('express')
const router = express.Router({mergeParams: true})
const { User } = require('../models')
// require module 'bcryptjs'
const bcrypt = require('bcryptjs');

router.get('/new', (req, res) => {
  res.render('registrations/new')
})

router.post('/', async (req, res) => {
  // Create a user with a hashed password using 'bcryptjs'
  // Then store the user id in the session
  // Then redirect to '/top-secret'

  const passwordHash = bcrypt.hashSync(req.body.password);

  const newUser = await User.create({
    email: req.body.email,
    passwordHash: passwordHash
  })

  // const newUser = await User.findAll({
  //   where: {
  //     email: req.body.email
  //   }
  // })

  // console.log("newUser");
  console.log(newUser);
  console.log(newUser.id)
  // console.log(newUser[0].id);

  req.session.userId = newUser.id

  res.redirect('/top-secret');

})

module.exports = router
