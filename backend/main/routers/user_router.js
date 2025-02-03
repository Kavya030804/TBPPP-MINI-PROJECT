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





// const express = require("express");
// const router = express.Router();
// const User = require("../model/user/User.schema");

// // const { hashPassword } = require("../helpers/bcrypt.helper");
// const { insertUser,getUserByEmail } = require("../model/user/User.model");
// // const { json } = require("body-parser");

// // Route to create a new user
// router.post("/", async (req, res) => {
//   try {
//     const { name, company, address, phone, email, password } = req.body;

//     // Validate required fields
//     if (!name || !company || !email || !password) {
//       return res.status(400).json({
//         status: "error",
//         message: "Please provide all required fields.",
//       });
//     }

//     // Create a new user
//     const newUser = new User({
//       name,
//       company,
//       address,
//       phone,
//       email,
//       password,
//     });

//     const savedUser = await newUser.save();

//     res.status(201).json({
//       status: "success",
//       message: "User created successfully.",
//       data: savedUser,
//     });
//   } catch (error) {
//     console.error(error);

//     if (error.code === 11000) {
//       // Handle duplicate email error
//       return res.status(409).json({
//         status: "error",
//         message: "Email already exists.",
//       });
//     }

//     res.status(500).json({
//       status: "error",
//       message: "An error occurred while creating the user.",
//     });
//   }
// });

// // user sign in router
// router.post("/login",  async(req, res) => {
//   console.log(req.body);

//   const { email, password } = req.body;

  
//   ///hash our email and compare it with the db email

//   if(!email || !password){
//     return res.json({status: "error", message: "Invalid form submission."});
//   }

//   ///get user email from db
//   const user = await getUserByEmail(email);
//   console.log(user);

//   res.json({status: "success", message: "User logged in successfully."});
// });

// module.exports = router;



// const express = require("express");
// const bcrypt = require("bcryptjs"); // For password hashing
// const router = express.Router();
// const User = require("../model/user/User.schema");
// const { insertUser, getUserByEmail } = require("../model/user/User.model");

// // Route to create a new user
// router.post("/", async (req, res) => {
//   try {
//     const { name, company, address, phone, email, password } = req.body;

//     // Validate required fields
//     if (!name || !company || !email || !password) {
//       return res.status(400).json({
//         status: "error",
//         message: "Please provide all required fields.",
//       });
//     }

//     // Check if the email already exists
//     const existingUser = await getUserByEmail(email);
//     if (existingUser) {
//       return res.status(409).json({
//         status: "error",
//         message: "Email already exists.",
//       });
//     }

//     // Hash password before saving
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create a new user
//     const newUser = new User({
//       name,
//       company,
//       address,
//       phone,
//       email,
//       password: hashedPassword, // Store hashed password
//     });

//     const savedUser = await newUser.save();

//     res.status(201).json({
//       status: "success",
//       message: "User created successfully.",
//       data: savedUser,
//     });
//   } catch (error) {
//     console.error("Error creating user:", error);

//     res.status(500).json({
//       status: "error",
//       message: "An error occurred while creating the user.",
//     });
//   }
// });

// // User sign-in route
// router.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // Validate input
//     if (!email || !password) {
//       return res.status(400).json({
//         status: "error",
//         message: "Invalid form submission.",
//       });
//     }

//     // Get user from database
//     const user = await getUserByEmail(email);
//     if (!user) {
//       return res.status(401).json({
//         status: "error",
//         message: "Invalid email or password.",
//       });
//     }

//     // Compare passwords
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(401).json({
//         status: "error",
//         message: "Invalid email or password.",
//       });
//     }

//     res.json({
//       status: "success",
//       message: "User logged in successfully.",
//     });
//   } catch (error) {
//     console.error("Login error:", error);
//     res.status(500).json({
//       status: "error",
//       message: "An error occurred while logging in.",
//     });
//   }
// });

// module.exports = router;


// const express = require("express");
// const bcrypt = require("bcryptjs");
// const router = express.Router();
// const { getUserByEmail } = require("../model/user/User.model");

// // User sign-in route
// router.post("/login", async (req, res) => {
//   const { email, password } = req.body;

//   // Case 1: Invalid form submission
//   if (!email || !password) {
//     return res.status(400).json({
//       status: "error",
//       message: "Invalid form submission.",
//     });
//   }

//   // Get user from database
//   const user = await getUserByEmail(email);

//   // Compare passwords (if user exists)
//   const isMatch = user && await bcrypt.compare(password, user.password);

//   // Case 2: Login successful
//   return res.json({
//     status: "success",
//     message: "User logged in successfully.",
//   });
// });

// module.exports = router;


// const express = require("express");
// const bcrypt = require("bcryptjs");
// const router = express.Router();
// const { getUserByEmail } = require("../model/user/User.model");

// // User sign-in route
// router.post("/login", async (req, res, next) => {
//   try {
//     const { email, password } = req.body;

//     // Case 1: Invalid form submission
//     if (!email || !password) {
//       return res.status(400).json({
//         status: "error",
//         message: "Invalid form submission.",
//       });
//     }

//     // Get user from database
//     const user = await getUserByEmail(email);

//     // Compare passwords (if user exists)
//     if (user && await bcrypt.compare(password, user.password)) {
//       return res.json({
//         status: "success",
//         message: "User logged in successfully.",
//       });
//     }

//     // If password doesn't match, handle it properly
//     // return res.status(401).json({
//     //   status: "error",
//     //   message: "Invalid email or password.",
//     // });

//   } catch (error) {
//     next(error); // Pass error to Express error handler to prevent connection reset
//   }
// });

// module.exports = router;


const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();
const { getUserByEmail } = require("../model/user/User.model");

// User sign-in route
router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Case 1: Invalid form submission
    if (!email || !password) {
      return res.status(400).json({
        status: "error",
        message: "Invalid form submission.",
      });
    }

    // Get user from database
    const user = await getUserByEmail(email);

    if (!user) {
      return res.status(401).json({
        status: "error",
        message: "Invalid email or password.",
      });
    }

    // Compare passwords (if user exists)
    const isMatch = await bcrypt.compare(password, user.password);

    // Case 2: Login successful
    if (isMatch) {
      return res.json({
        status: "success",
        message: "User logged in successfully.",
      });
    }

    return res.status(401).json({
      status: "error",
      message: "Invalid email or password.",
    });

  } catch (error) {
    next(error); // Pass error to Express error handler to prevent connection reset
  }
});

module.exports = router;
