const express = require( 'express');
const router = express. Router();
const productController = require('../controllers/productController.js');


// Endpoints manuales

router.get('/', productController.getAllProducts);
router.post('/', productController.addproduct);
router.delete('/:id', productController.deleteProducts);
router.put('/:id', productController.updateProducts);




module.exports= router;