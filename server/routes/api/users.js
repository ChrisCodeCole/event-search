const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

const User = require('../../models/User');
//@route   POST api/users
//@desc    register user
//@access  Public
router.post(
  '/',
  [
    check('name', 'Name is required')
      .not()
      .isEmpty(),
    check('email', 'Please enter a valid email address').isEmail(),
    check(
      'password',
      'Please enter valid password with 6 or more characters'
    ).isLength({ min: 6 })
  ],
  async (req, res) => {
    //async because of Mongoose query
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      //check if errors
      return res.status(400).json({ errors: errors.array() }); //bad request
    }

    const { name, email, password } = req.body;

    try {
      //See if user exists
      let user = await User.findOne({ email }); //query from Mongoose
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User account exists' }] });
      }
      //get users gravitar
      const avatar = gravatar.url(email, {
        s: '200',
        r: 'pg',
        d: 'mm'
      });

      //create user
      user = new User({
        name,
        email,
        password,
        avatar
      });

      //encrypt password
      const salt = await bcrypt.genSalt(10); //10 rounds recommended in doc, anything that returns a promise needs 'await'
      user.password = await bcrypt.hash(password, salt);
      await user.save();

      const payload = {
        user: {
          id: user.id //the await promise (await line above) contains the id from mongoose (that is _id in mongodb)
        }
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        {
          expiresIn: 36000 //expires in 10 hours
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token }); //if not, it returns the hashed token, and we send that in headers in access protected routes. You can take this token into JWT.io to decrypt
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('server error');
    }
  }
);

module.exports = router;
