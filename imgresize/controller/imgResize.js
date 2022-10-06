const sharp = require("sharp")
const fs = require("fs")
const {IncomingForm} = require("formidable")
const path = require("path")
module.exports.resize = (req,res) =>{
    const form = new IncomingForm()
    form.parse(req,(err,fields,files)=>{   
        const readStream = fs.createReadStream(files.payload.filepath,{})
        const writeStream = fs.createWriteStream(path.join(__dirname,"..","resizedImg",files.payload.originalFilename))
        const resize =  sharp().resize(200,200)
        readStream.pipe(resize).pipe(writeStream)
        writeStream.on("finish",()=>{
            res.send("finished")
        })

    })


}