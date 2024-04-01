



const typeProduct = require("../models/TypeProduct")


class typeProductController {
    async addTypeProduct(req, res){
        try {
            const {typeproduct, title, typeTool} = req.body;
            const typeProd = new typeProduct({typeproduct, title, typeTool})
            typeProd.save()
            return res.json(typeProd)
        }catch(e) {
            console.log(e)
        }
    }

    async getAll(req, res) {
        try {
            const typeProducts = await typeProduct.find()
            return res.json(typeProducts)
        }catch(e) {

        }
    }
}

module.exports = new typeProductController()