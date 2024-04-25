
const Card = require("../models/Card")
const uuid = require("uuid")
const path = require('path');
const fs = require("fs")

class CardController {
    async addCard(req, res) {
        
        try {
            if (!req.files || !req.files.file) {
                console.log(req.files)
                return res.status(400).json({ error: 'No file uploaded' });
            }
            const {code, sale, brandId, title, price, categoryId, typeToolId, typeProductId, params} = req.body;
            
            const files = req.files.file;
            const arrayImages = []

            if(Array.isArray(files)) {
                for (let i = 0; i < files.length; i++) {
                    const file = files[i]
                    const fileName = uuid.v4() + ".webp";

                    const filePath = path.join(req.pathStatic, fileName);

                    await file.mv(filePath);
                    
                    arrayImages.push(fileName)
                }
            } else {

                const fileName = uuid.v4() + ".webp";
                const filePath = path.join(req.pathStatic, fileName)
                await files.mv(filePath);
                arrayImages.push(fileName)
            }

            
            const card = new Card({code, sale, brandId, title, price, categoryId, typeToolId, typeProductId, images: arrayImages, params: params})
            await card.save();

            return res.json({message: "Card "})
        } catch(e) {
            console.log(e)
        }
    }

}


module.exports = new CardController();