const express = require("express");
const Item = require("../models/item");
const itemRouter = express.Router();
const auth = require("../middlewares/auth")

itemRouter.post("/api/add-item",auth,async (req,res) => {
    try {
        const { id,item_name,item_link } = req.body;

        let chkitem =  await Item.findById(id);

        if(chkitem)
        {
            chkitem.items.push({
                itemName:item_name,
                itemLink:item_link,
            })
            chkitem = await chkitem.save();
            res.json(chkitem);
        }
        else
        {
            let item = new Item({
                _id:id,
                items:{
                    itemName:item_name,
                    itemLink:item_link,
                }
            });
            item = await item.save();
            res.json(item);
        }
    } catch (e) {
        res.status(500).json({error: e.message});
    }
});

itemRouter.post("/api/get-items",async (req,res) => {
    try {
        const id = req.header('x-user-id');
        let item =  await Item.findById(id);

        if(item)
        {
            res.json(item);
        }
        else
        {
            return res.status(400).json({msg:'user does not exists'});
        }
    } catch (e) {
        res.status(500).json({error: e.message});
    }
});

module.exports = itemRouter;