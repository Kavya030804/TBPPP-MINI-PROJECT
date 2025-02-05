// const { UserSchema }=require("./User.schema");
// const insertUser=(userObj)=>{
//     return new Promise((resolve , reject)=>{
//         UserSchema(userObj)
//         .save()
//         .then(data=>resolve(data))
//         .catch(error=>reject(error));

//     })
// };
    
// const getUserByEmail=(email)=>{
//     return new Promise((resolve,reject)=>{
//         if(!email) return false;

//         try{
//             UserSchema.findOne({email},(error,data)=>{
//                 if(error){
//                     reject(error);
//                 }
//                 resolve(data);
//         });
//         }catch(error){
//             reject(error);
//         }
    
// });

// };
        
    
// module.exports = {
//     insertUser,
//     getUserByEmail,
// }

const { UserSchema } = require("./User.schema");

const insertUser = (userObj) => {
  return new Promise((resolve, reject) => {
    UserSchema(userObj)
      .save()
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};

const getUserByEmail = (email) => {
  return new Promise((resolve, reject) => {
    if (!email) return reject("Email is required");

    UserSchema.findOne({ email }, (error, data) => {
      if (error) {
        reject(error);
      }
      resolve(data);
    });
  });
};

module.exports = {
  insertUser,
  getUserByEmail,
};
