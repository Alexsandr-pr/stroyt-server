
const Brand = require("../models/Brand");


class brandController {
    async addBrand(req, res){
        try {
            const {title} = req.body;
            const brand = new Brand({title})
    
            brand.save();
            return res.json(brand);
        }catch(e) {
            return res.json({message: "Brand not add to database"})
        }
    }

    async getAllBrand(req, res) {
        try {
            const brands = await Brand.find();
            return res.json(brands)
    
        }catch(e) {
            return res.json({massege: "Could not receive all brand"})
        }
    }

    async deleteBrand(req, res){
        try {
            const {_id} = req.query
            const brand = await Brand.findById({_id});
            if(brand) {
                await brand.deleteOne({_id});
            }
            
            return res.json({message:"Delete brand"});
        } catch(e) {
            console.log(e)
        }
    }
}

module.exports = new brandController()