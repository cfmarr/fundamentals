const router = require('express').Router();
const User = require('../model/User');
const verify = require('../util/verifyToken');

router.get('/', verify, async (req, res) => {
  //Middleware (verify) adds authUser to req object that holds user _id and iat (issued at)
  const user = await User.findOne({ _id: req.authUser._id });
  const { _id, name, email } = user;
  res.send({ _id, name, email });
});

module.exports = router;
