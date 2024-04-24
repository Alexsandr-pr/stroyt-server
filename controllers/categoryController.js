
const Category = require("../models/Category")


class categoryController {
    async addCategory(req, res){
        try {
            const {title} = req.body;
            const checkCategory = await Category.findOne({title});

            if(checkCategory) {
                return res.status(400).json({message: `Category ${title} already exist`})
            }

            const category = new Category({title})
    
            await category.save();
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

    async deleteCategory(req, res){
        try {
            const {_id} = req.query
            const typeProduct = await Category.findById({_id});


            if(typeProduct) {
                await Category.deleteOne({_id});
            }
            
            return res.json({message:"Delete category"});
        } catch(e) {
            console.log(e)
        }
    }
}

module.exports = new categoryController()