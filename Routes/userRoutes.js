const express= require("express")
const User=require("../models/User")
const router=express.Router();

//GET
 router.get("/",async(req,res)=>{
    const users =await User.find();
    res.json(users)
 })

 //GET BY ID

 router.post("/",async(req,res)=>{
    const{name,age,email}=req.body;
    const user=await User.create({
        name,
        age,
        email

    });
    res.status(201).json(user)
 })

 //PUT

 router.put("/:id",async(req,res)=>{
    const user=await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:ture}
    );
    res.json(user);
 })
//deletemany
router.delete("/users", async (req, res) => {
    try {
        const result = await User.deleteMany(req.body);
 
        res.json({
            message: "Deleted successfully",
            deletedCount: result.deletedCount
        });
 
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});


 //DELETE
 router.delete("/:id",async(req,res)=>{
    await User.findByIdAndDelete(req.params.id);
    res.json({
        message:"user deleted successfully"
    })
 })

 //insetmany
   router.post("/users", async (req, res) => {
 try {

 const users = await User.insertMany(req.body);

 res.status(201).json({
 message: "Users added successfully",
 data: users
 });

 } catch (error) {

 res.status(500).json({
 message: error.message
 });

 }
});


 module.exports=router