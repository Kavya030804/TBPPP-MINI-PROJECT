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





const express = require("express");
const router = express.Router();
const User = require("../model/user/User.schema");

// Route to create a new user
router.post("/", async (req, res) => {
  try {
    const { name, company, address, phone, email, password } = req.body;

    // Validate required fields
    if (!name || !company || !email || !password) {
      return res.status(400).json({
        status: "error",
        message: "Please provide all required fields.",
      });
    }

    // Create a new user
    const newUser = new User({
      name,
      company,
      address,
      phone,
      email,
      password,
    });

    const savedUser = await newUser.save();

    res.status(201).json({
      status: "success",
      message: "User created successfully.",
      data: savedUser,
    });
  } catch (error) {
    console.error(error);

    if (error.code === 11000) {
      // Handle duplicate email error
      return res.status(409).json({
        status: "error",
        message: "Email already exists.",
      });
    }

    res.status(500).json({
      status: "error",
      message: "An error occurred while creating the user.",
    });
  }
});

module.exports = router;
