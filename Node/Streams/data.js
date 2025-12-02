import fs from "fs/promises"
for(let i = 0 ; i < 1000 ; i++){
    await fs.writeFile("./data.txt",i+"\n",{flag : "a"})
}