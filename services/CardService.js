const uuid = require("uuid")
const path = require('path');
const fs = require("fs")



class CardService {

    async createCode() {
        let id = "";
        for(let i = 0; i < 10; i++) {
            id += Math.floor(Math.random() * 10)
        }
        return id;
    }

    async addFile(req, file) {
        try {
            const fileName = uuid.v4() + ".webp";
            const filePath = path.join(req.pathStatic, fileName);
    
            await file.mv(filePath);
            
            return fileName;
        } catch {
            console.log(e)
        }
    }

    async createArrayFiles(req, files) {
        try {
            let arrayImages = [];
            if(Array.isArray(files)) {
                for (let i = 0; i < files.length; i++) {
                    const file = files[i]
                    const fileName = await this.addFile(req, file);
                    arrayImages.push(fileName)
                }
            } else {
                const fileName = await this.addFile(req, files);  
                arrayImages.push(fileName)
            }
            
            return arrayImages;
        } catch{
            console.log(e)
        }
             
        
    }
}

module.exports = new CardService()