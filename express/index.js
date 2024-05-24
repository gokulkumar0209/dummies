import express from 'express'

const app=express()

const port=3000
app.get("/",(req,res)=>{
    res.send("Hello from Hulk")
})
app.get("/bbt",(req,res)=>{
    res.send("Bazinga!")
})
app.get("/friends",(req,res)=>{
    res.send("Howudoing!")
})
app.listen(port,()=>{
    console.log(`server is running at port: ${port}`)
})