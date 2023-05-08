const { Router } = require('express');
const { getGrocery, saveGrocery, deleteGrocery, editGrocery } = require('./GroceryController');
const router = Router();

router.get('/', getGrocery);
router.post('/saveGrocery', saveGrocery);
router.post('/deleteGrocery', deleteGrocery);
router.post('/editGrocery', editGrocery);

module.exports = router; 
