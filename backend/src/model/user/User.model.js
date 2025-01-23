const {userSchema}=require("./User.schema")
const innerUser=userObj=>{
    userSchema{userObj}
    .save()
    .then(data=>console.log(data))
    .catch((error)=>console.log(error));
}