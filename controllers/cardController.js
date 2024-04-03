
const Card = require("../models/Card")
const uuid = require("uuid")
const path = require('path');


class CardController {
    async addCard(req, res) {
        
        try {
            if (!req.files || !req.files.file) {
                console.log(req.files)
                return res.status(400).json({ error: 'No file uploaded' });
            }
            const file = req.files.file;
            const {code, sale, brandId, title, price, categoryId, typeToolId, typeProductId} = req.body;
           
            const cardImageSource = uuid.v4() + ".webp";

            const filePath = path.join(req.pathStatic, cardImageSource)
            await file.mv(filePath);

            const card = new Card({code, sale, brandId, title, price, categoryId, typeToolId, typeProductId, imageSrc: cardImageSource})

            await card.save();

            return res.json(card)
        } catch(e) {
            console.log(e)
        }
    }

}


module.exports = new CardController();

module.exports = new CardController();