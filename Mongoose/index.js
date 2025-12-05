import express from 'express'
import connectDB from './database.js'
import { createDoc, del, getDoc, updateDoc, updateMany } from './models/Movies.js'
// important step for env configurations else won't work
import dotenv from 'dotenv'
dotenv.config()

const app = express()
const URL = process.env.DATABASE_URL

connectDB(URL)
createDoc()
getDoc()
updateDoc()
updateMany()
del()

app.listen(8000,(req,res)=>{
    console.log("Express server ready to go..!")
})