import mongoose from "mongoose";

// creating movies schema using moongoose.model 

const moviesSchema = new mongoose.Schema({
    name : { type: String , required : true, trim: true},
    ratings : { type : Number , required : true , min : 1 , max : 5},
    money : { type : mongoose.Decimal128,required : true, validate : (v)=> v=> 10},
    genre : { type : Array},
    isActive : { type : Boolean},
    comments : [ {
        value : { type : String}, published : { type : Date, default : Date.now}
    }]
})

const movieModel = mongoose.model("Movie",moviesSchema)

// creating new document

const createDoc = async()=>{
    try {
        const m1 = new movieModel({
            name : "PK 2014",
            ratings : 5,
            money : 22000,
            genre : ['comedy','inspiring'],
            isActive : true,
            comments : [{value:"Amazing and good message.."}]
        })
        const m2 = new movieModel({
        name: "Interstellar 2014",
        ratings: 4.8,
        money: 45000,
        genre: ["sci-fi", "adventure"],
        isActive: true,
        comments: [{ value: "Mind-blowing visuals and emotional depth." }]
    });

    const m3 = new movieModel({
        name: "Bahubali 2015",
        ratings: 4.5,
        money: 60000,
        genre: ["action", "drama"],
        isActive: true,
        comments: [{ value: "Epic and grand narration." }]
    });

    const m4 = new movieModel({
        name: "3 Idiots 2009",
        ratings: 5,
        money: 35000,
        genre: ["comedy", "inspiring"],
        isActive: true,
        comments: [{ value: "Beautiful message and entertaining." }]
    });

    const m5 = new movieModel({
        name: "Inception 2010",
        ratings: 4.9,
        money: 52000,
        genre: ["sci-fi", "thriller"],
        isActive: true,
        comments: [{ value: "Brilliant concept and execution." }]
    });

    const m6 = new movieModel({
        name: "RRR 2022",
        ratings: 4.7,
        money: 95000,
        genre: ["action", "drama"],
        isActive: true,
        comments: [{ value: "High energy and great storytelling." }]
    });

        // const result = await m3.save()
        // const result = await movieModel.insertMany([m2,m3,m4,m5,m6])
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

// getting all document 

const getDoc = async()=>{
    try {

        // get all
        const result1 = await movieModel.find()

        // we can also provide extra attributes like skip, limit, sort, etcc...
        const result2 = await movieModel.find().skip(2)

        // iterating over each result
        result1.forEach((result)=>{
                console.log(result.name)
            })

        // // getByID
        const result3 = await movieModel.findById('69327505e42b8175c5b39116')
        console.log(result.ratings)

        // // getByField
        const result4 = await movieModel.find({'name':'PK 2014'}) 
        
        // // we can also provide optional fields to get data of mentioned filed
        const result5 = await movieModel.find({'name':'PK 2014'},{'ratings':1}) 

        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

// updation 

const updateDoc = async(id)=>{
    // updateOne
    try {
        const result = await movieModel.updateOne({_id:id},{'name':'PK The Great 2014'})
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

// updateMany

const updateMany = async()=>{
    try {
        const result8 = await movieModel.updateMany({'ratings':{$gte:4.5}},{'ratings':4.5})
        console.log(result8)
    } catch (error) {
        console.log(error)
    }
}

// delete

const del = async()=>{
    // deleteOne
    try {
        const result9 = await movieModel.deleteOne({_id:'69328826f5e30d4eacca01de'})
        console.log(result9)
    
        // deleteMany
        const result10 = await movieModel.deleteMany({'ratings':4.5})
        console.log(result10)
    } catch (error) {
        console.log(error)
    }
}

export {createDoc,getDoc,updateDoc,updateMany,del}