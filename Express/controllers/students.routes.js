import express from 'express'
import {all,create,update,remove} from "./student.controllers.js"

const router = express.Router()
router.get('/all',all)
router.post('/create',create)
router.put('/update',update)
router.delete('/delete',remove)
export default router