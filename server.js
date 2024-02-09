const express = require("express")
const dotenv = require("dotenv")
const authRoute = require("./routes/authentication")
const dbConnect = require("./config/database")


dotenv.config()


const app = express()
app.use(express.json())
app.use(`/api/auth/`, authRoute)

dbConnect()
const PORT = process.env.PORT || 3000
app.listen(PORT, ()=> {
    console.log(`server running on PORT: ${PORT}`);
})