const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

const templates = [

{
id:1,
name:"Restaurant Template",
description:"Perfecto para restaurantes modernos",
price:129,
image:"https://images.unsplash.com/photo-1555396273-367ea4eb4db5",
demo:"https://example.com"
},

{
id:2,
name:"Startup Template",
description:"Ideal para startups tecnológicas",
price:149,
image:"https://images.unsplash.com/photo-1492724441997-5dc865305da7",
demo:"https://example.com"
}

]

app.get("/templates",(req,res)=>{

res.json(templates)

})

app.post("/buy",(req,res)=>{

const templateId = req.body.templateId

console.log("Compra iniciada:",templateId)

res.json({

success:true,
message:"Compra iniciada"

})

})

app.listen(3000,()=>{

console.log("Servidor funcionando en puerto 3000")

})