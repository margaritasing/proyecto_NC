const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//REGISTER Para registrar los usuarios
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username, 
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString(),
  }); 

  try {
    const savedUser = await newUser.save();
    console.log(newUser)
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN  loguea sin el jwt

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(401).json("Wrong credentials!");

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SEC
    );
    const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    OriginalPassword !== req.body.password &&
      res.status(401).json("Wrong credentials!");

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SEC,
      {expiresIn:"3d"}
    );

    const { password, ...others } = user._doc;

    res.status(200).json({...others, accessToken });
  } catch (err) {
    res.status(500).json(err);
  }
});

//SIGN OUT 


router.post("/signOut",  async (req,res) => {

  const email = req.body.email
  console.log(req.body.email)

  const user = await User.findOne({email})

  await user.save()
  res.status(200).json({success:true, response:"Closed assignment"})

}),

module.exports = router;
