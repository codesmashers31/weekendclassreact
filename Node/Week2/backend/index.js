import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import authRoutes from './routes/authRoutes.js'
import connectDB from './config/db.js'

const app = express()

dotenv.config()

const PORT = process.env.PORT || 3000

connectDB()

app.use(cors())
app.use(express.json())



app.use("/api/auth",authRoutes)

app.listen(PORT,()=>{
    console.log(`Server Running successfully http://localhost:${PORT}`);
    
})

// http://localhost:5000/api/auth