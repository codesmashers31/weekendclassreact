import express from 'express'
import dotenv from 'dotenv'
import crudRoutes from './routes/crudRoutes.js'
import cors from 'cors'
import DbConnect from './config/db.js'
dotenv.config()
DbConnect()
const app = express()

app.use(cors())
app.use(express.json())



app.use("/api/crud",crudRoutes)

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`Server Runnig on http://localhost:${PORT}`);
    
})


// http://localhost:5000/api/crud