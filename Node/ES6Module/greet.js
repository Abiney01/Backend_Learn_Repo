// change the type as module instead of commonjs in package.json file

import {person1,person2,person3} from "./index.js"
const greet = (person)=>{
    console.log(`Hello ${person}`)
}
greet(person1)
greet(person2)
greet(person3)