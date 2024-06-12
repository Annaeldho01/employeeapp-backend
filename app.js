const express =require("express")
const mongoose =require("mongoose")
const cors =require("cors")
const {employeemodel}=require("./models/addEmployee")

const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://anna:anna@cluster0.ld2gi.mongodb.net/employeeDB?retryWrites=true&w=majority&appName=Cluster0")


app.post("/",(req,res)=>{
    let input=req.body
    let employee = new employeemodel(input)
    employee.save()
    console.log(employee)
    res.json({"status":"success"})
    
})


app.get("/view",(req,res)=>{
    employeemodel.find().then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    ).finally()
    
})

app.listen(8082,()=>{
    console.log("Server Started")
})