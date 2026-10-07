const express=require('express')
const dotenv =require('dotenv')
const connectDB =require("./config/db.js")
const userRoutes=require("./Routes/userRoutes.js")
dotenv.config()
connectDB()

const app=express()
//midddleware
app.use(express.json())
//ROUTER
app.use("/api/users",userRoutes)

app.get("/",(req,res)=>{
    res.send("Hello Backend")
});

const PORT=process.env.PORT
app.listen(PORT,()=>{
    console.log(`server is runing on part ${PORT}`);
})
