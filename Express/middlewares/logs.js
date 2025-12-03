const userCredentials = (req,res,next)=>{
    console.log("Username : Ramesh")
    console.log("Password : 1123")
    console.log("email: ramo@ram.com")
    next()
}
export default userCredentials