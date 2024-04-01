
const Category = require("../models/Category")


class categoryController {
    async addCategory(req, res){
        try {
            const {type, title} = req.body;
            const category = new Category({type, title})
    
            category.save();
            return res.json(category);
        }catch(e) {
            return res.json({message: "Category not add to database"})
        }
    }

    async getAll(req, res) {
        try {
            const categoryAll = await Category.find();
            return res.json(categoryAll)
    
        }catch(e) {
            return res.json({massege: "Could not receive all category"})
        }
    }
}

module.exports = new categoryController()