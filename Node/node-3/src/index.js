const express= require('express')
const app=express()
const port=3000

app.get('/',(req,res)=>{
    res.sendFile('./index.html',{root:__dirname})
})
app.get('/index.html',(req,res)=>{
    res.sendFile('./index.html',{root:__dirname})
})
app.get('/about.html',(req,res)=>{
    res.sendFile('./about.html',{root:__dirname})
})
app.get('/contact.html',(req,res)=>{
    res.sendFile('./contact.html',{root:__dirname})
})

app.listen(port,()=>{
    console.log(`running on port ${port}`)
})