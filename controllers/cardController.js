
const Card = require("../models/Card")
const uuid = require("uuid")
const path = require('path');
const fs = require("fs")
const CardService = require("../services/CardService")
const VendorCode = require("../models/VendorCode")

class CardController {
    async addCard(req, res) {
        try {
            if (!req.files || !req.files.file) {
                console.log(req.files)
                return res.status(400).json({ error: 'No file uploaded' });
            }
            const {
                sale, 
                brandId, 
                title, 
                price, 
                categoryId, 
                typeToolId, 
                typeProductId, 
                params,
                description
            } = req.body;

            const code =  await CardService.createCode()
            
            const files = req.files.file;
            const arrayImages = await CardService.createArrayFiles(req, files);

           
            const vendor = new VendorCode({code: code});
            await  vendor.save();

            const card = new Card({
                code: vendor,  
                sale, 
                brandId, 
                title, 
                price, 
                categoryId, 
                typeToolId, 
                typeProductId, 
                images: arrayImages, 
                params: params, 
                description: description
            })
            await card.save();

            return res.json(card)
        } catch(e) {
            console.log(e)
        }
    }

    async getCard(req, res) {
        try {

            const cards = await Card.find()


            return res.json(cards);
        }catch{
            return res.json({message: "Ошибка при получении файлов"})
        }
    }

    async getOneCard(req, res) {
        try {
            const id = req.params.id
            const card = await Card.findOne({_id: id})

            return res.json(card);
        }catch{
            return res.json({message: "Ошибка при получении товара"})
        }
    }
    
    async deleteCard(req, res) {
        try {
            const id = req.params.id;
            const card = await Card.deleteOne({_id : id});
            await card.save();
            return res.json({message: "Вы удалили товар"});
        }catch{
            return res.json({message: "Ошибка при удалении товара"})
        }
    }
}


module.exports = new CardController();