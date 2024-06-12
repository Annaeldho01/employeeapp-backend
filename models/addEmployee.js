const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
        "id":String,
        "name":String,
        "job":String,
        "salary":String
    }
)

let employeemodel=mongoose.model("employees",schema)
module.exports={employeemodel}