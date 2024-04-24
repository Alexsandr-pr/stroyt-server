
const TypeTool = require("../models/TypeTool")


class typeToolController {
    async addTypeTool(req, res){
        try {
            const _id = req.params.id;
            const {title} = req.body;

            const checkTypeTool = await TypeTool.findOne({title});

            if(checkTypeTool) {
                return res.status(400).json({message: `TypeTool ${title} already exist`})
            }

            const typeTool = new TypeTool({title, categoryId: _id});

            await typeTool.save();
            return res.json(typeTool);
        }catch(e) {
            return res.json({message: "Category not add to database"})
        }
    }

    async getAll(req, res) {
        try {
            const typeToolAll = await TypeTool.find();
            
            return res.json(typeToolAll)
        }catch(e) {
            return res.json({massege: "Could not receive all category"})
        }
    }

    async getAllByCategory(req, res) {
        try {
            const {_id} = req.query

            const typeToolAllbyCategory = await TypeTool.find({categoryId: _id});

            return res.json(typeToolAllbyCategory)
    
        }catch(e) {
            return res.json({massege: "Could not receive all type by category"})
        }
    }

    async deleteTypeTool(req, res){
        try {
            const {_id} = req.query
            const typeTool = await TypeTool.findById({_id});
            if(typeTool) {
                await TypeTool.deleteOne({_id});
            }
            
            return res.json({message:"Delete type"});
        } catch(e) {
            console.log(e)
        }
    }
}

module.exports = new typeToolController()