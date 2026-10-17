import express from 'express'
import { AddUser, getData, updateData , deleteData } from '../controllers/crudController.js'

// http://localhost:5000/api/crud/adding
// http://localhost:5000/api/crud/getting
// http://localhost:5000/api/crud/updateing
// http://localhost:5000/api/crud/deleteing

const routes = express.Router()

routes.post("/adding",AddUser)
routes.get("/getting",getData)
routes.put("/updateing/:userid",updateData)
routes.delete("/deleteing/:userid",deleteData)

export default routes