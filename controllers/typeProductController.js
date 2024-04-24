



const TypeProduct = require("../models/TypeProduct")


class typeProductController {
    async addTypeProduct(req, res){
        try {
            const {_id} = req.query;
            const {title} = req.body;

            const checkTypeProduct = await TypeProduct.findOne({title});

            if(checkTypeProduct) {
                return res.status(400).json({message: `TypeProduct ${title} already exist`})
            }

            const typeProd =   new TypeProduct({title, typeToolId: _id})
            await typeProd.save();
            return res.json(typeProd);
        }catch(e) {
            console.log(e)
        }
    }

    async getAll(req, res) {
        try {
            const typeProducts = await TypeProduct.find();
            
            return res.json(typeProducts)
        }catch(e) {
            console.log(e)
        }
    }

    async getAllByCategory(req, res) {
        try {
            const {_id} = req.query
            const typeProducts = await TypeProduct.find({typeToolId: _id});
            
            return res.json(typeProducts)
        }catch(e) {
            console.log(e)
        }
    }


    async deleteType(req, res){

        try {
            const {_id} = req.query;
            const typeProduct = await TypeProduct.findById({_id});
            if(typeProduct) {
                await TypeProduct.deleteOne({_id});
            }
            return res.json({message:" Delete type"});
        } catch(e) {
            console.log(e)
        }
    }
}

module.exports = new typeProductController()