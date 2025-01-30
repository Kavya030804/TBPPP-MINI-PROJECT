// const express=require('express');
// const { route } = require("./ticket_router");
// const router=express.Router()

// const {insertUser} = require("../model/user/User.model");
// const {hashPassword} = require('../helpers/bcrypt.helper');

// router.all('/',(req,res,next)=>{
//    // res.json({message:'return from user'})
//     next();
// })

// router.post('/',async(req,res)=>{
//     const{name , company , address , phone , email, password }=req.body 
//     try{
//         //hash pssword

//         const hashedPass = await hashPassword(password);
//         const newUserObj = {
//             name,
//             company,
//             address,
//             phone,
//             email,
//             password:hashedPass,
//         };

//         const result = await insertUser(newUserObj)
//         console.log(result);
//         res.json({message: "New User Created",result});
//     }catch(error){
//         console.log(error);
//         res.json({statux: "error",message:error.message});
//     }
    
// });

// module.exports=router;





const express = require('express');
const router = express.Router();
const { hashPassword } = require('../helpers/bcrypt.helper');
const { insertUser } = require('../model/user/User.model');

// handle user signup
router.post('/sign-up', async (req, res) => {
  try {
    const { name,address, phone, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        status: 'error',
        message: 'Please provide all required fields (name, email, password).',
      });
    }

    // Hash the password
    const hashedPassword = await hashPassword(password);

    const newUserObj = {
      name,
      address,
      phone,
      email,
      password: hashedPassword,
    };

    // Save the user
    const result = await insertUser(newUserObj);
    res.status(201).json({
      status: 'success',
      message: 'User signed up successfully!',
      data: result,
    });
  } catch (error) {
    console.error(error);

    if (error.code === 11000) {
      return res.status(409).json({
        status: 'error',
        message: 'Email already exists.',
      });
    }

    res.status(500).json({
      status: 'error',
      message: 'Error signing up the user.',
    });
  }
});

// handle user login
router.post('/log-in', (req, res) => {
  res.json({
    status: 'success',
    message: 'Login successfully!',
  });
});

module.exports = router;
