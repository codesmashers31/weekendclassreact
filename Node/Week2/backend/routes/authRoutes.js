import express from 'express'
import { createData, getDatas, getheaders, getParams, getquery } from '../controllers/authController.js'


const route = express.Router()

route.post("/adding",createData)

route.get("/getdatas",getDatas)

route.get("/getparas/:id",getParams)

route.get("/getquerys",getquery)

route.get("/getheaders",getheaders)

export default route


// http://localhost:5000/api/auth/adding
// http://localhost:5000/api/auth/getdatas
// http://localhost:5000/api/auth/getparas/4765375637635
// http://localhost:5000/api/auth/getquerys
// http://localhost:5000/api/auth/getheaders