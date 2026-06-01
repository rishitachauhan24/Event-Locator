const express=require("express")
const dotenv =require("dotenv")
const cors=require("cors")
const morgan=require("morgan")

const connectDB=require("./config/db")

dotenv.config()

connectDB()

const app=express()

app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

app.use("/api/auth", require("./routes/authRoutes"))
app.use("/api/events", require("./routes/eventRoutes"))

app.get("/", (req,res)=>{
    res.send("Event Locator API Running")
})

const PORT =process.env.PORT ||4000

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})