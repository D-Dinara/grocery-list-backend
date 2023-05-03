const GroceryModel = require('./GroceryModel');

module.exports.getGrocery = async (req,res) => {
    const myGrocery = await GroceryModel.find();
    res.send(myGrocery);
}

module.exports.saveGrocery = async (req,res) => {
    const { title, quantity, unitOfMeasurement } = req.body;
    GroceryModel.create({ title, quantity, unitOfMeasurement })
    .then((data) => { 
        res.send(data)
    })
}

module.exports.deleteGrocery = async (req,res) => {
    const { _id } = req.body;
    GroceryModel.findByIdAndDelete(_id)
    .then(() => res.send('Item deleted'))
}

module.exports.editGrocery = async (req,res) => {
    const { _id, title, quantity, unitOfMeasurement } = req.body;
    GroceryModel.findByIdAndUpdate(_id, { title, quantity, unitOfMeasurement })
    .then(() => res.send('Item updated'))
}