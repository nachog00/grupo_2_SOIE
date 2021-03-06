const views = require('../modules/file.js');
const {resolve} = require('path');

const models = {
    products : require('../models/product.model.js'),
}

module.exports = {
    list: (req,res) => {
        res.render(views('products/productList'), {
            title : 'Productos',
            style : 'productList',
            products : models.products.index()
        })
    },
    detail: (req,res) => {
        res.render(views('products/productDetail'), {
            title : 'Detalle de producto',
            style : 'productDetail',
        })
    },
    newp: (req,res) => {
        res.render(views('products/productNew'), {
            title : 'Crear producto',
            style : 'productNew',
        })
    },
}