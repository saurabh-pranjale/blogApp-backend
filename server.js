const express = require('express')
const app = express()
const dotenv = require('dotenv')
const userRoutes = require('./routes/userRoute')
const blogRoutes = require('./routes/blogRoute')
const connect = require('./config/db')

connect()
dotenv.config()

app.use(express.json())
app.use('/api/user',userRoutes)
app.use('/api/blog',blogRoutes)

app.listen(process.env.port,()=>{
    console.log(`we are listening at ${process.env.port}`)
})