const express = require('express');
const router = express.Router();
const User = require('../models/user');
// Question 14
router.post('/register', function (req, res) {
  const newUser = new User({
    password: req.body.password,
    email: req.body.email,
  });
  newUser.save().then(document => {
    res.json({ message: "data inserted successfully", document: document });
  });
});
// Question 15
router.delete('/register', function (req, res) {
  console.log(req.id);
  User.deleteOne({ id: req.id }, function (data, err) {
    if (err) { 
      console.log(err);
      res.status(400).send(err);
    } else {
      console.log(data);
      res.json(data);
    };
  });
  ;
});

module.exports = router;
