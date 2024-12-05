const express = require ('express')
const connectDB = require('./config/connectDB')
const contactRouter = require('./routes/contact')
const app = express ()

const port = 5000




connectDB()

app.use(express.json())
app.use ('/Api/contact',contactRouter)


app.listen(port, console.log(`server is runnig on the port ${port}`))






