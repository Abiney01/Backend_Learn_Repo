import EventEmitter from "events";

const eventEmitter = new EventEmitter()

eventEmitter.on('listen',()=>{
    console.log("I'am listening bruhh!!..")
})

eventEmitter.on('SayMyName',(name)=>{
    console.log(`Hey you're name is ${name}`)
})
// emit once not the both
// eventEmitter.on('SayMyName',(name)=>{
//     console.log(`Hey you're name is ${name}`)
// })

// eventEmitter.emit('listen')
eventEmitter.emit('SayMyName','Alex Babu')
eventEmitter.emit('SayMyName','Ramakkan')
