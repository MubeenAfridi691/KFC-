const express = require('express');
const router = express.Router();
const {createproduct,allproducts,singleproduct,updateproduct,deleteproduct} = require('../controller/Product')


router.route('/create/product').post(createproduct)
router.route('/productall').get(allproducts)
router.route('/product/:id').get(singleproduct)
router.route('/product/update/:id').put(updateproduct)
router.route('/product/delete/:id').delete(deleteproduct)


module.exports = router;
