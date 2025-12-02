import * as fs from "fs/promises"

// make directory
try {
    await fs.mkdir("D://hello//nodejs",{recursive:true})
    console.log("Folder created ...")
} catch (error) {
    console.log(error)
}

// read directory
try {
    const files = await fs.readdir("D://hello//nodejs")
    console.log(files)
} catch (error) {
    console.log(error)
}

// remove directory
try {
    await fs.rmdir("D://hello//nodejs")
} catch (error) {
    console.log(error)
}

// write file content 
try {
    await fs.writeFile("Readme.txt","Hello what's up")
    // await fs.writeFile("Readme.txt","Im doing good!..") ->overwrite
} catch (error) {
    console.log(error)
}

// read file content 
try {
    const data = await fs.readFile("Readme.txt",'utf-8')
    console.log(data)
} catch (error) {
    console.log(error)
}

// append file content
try {
    await fs.appendFile("Readme.txt","\nThis is the appended text")
} catch (error) {
    console.log(error)
}

// copy file content
try {
    await fs.copyFile("Readme.txt","copied.txt")
} catch (error) {
    console.log(error)
}