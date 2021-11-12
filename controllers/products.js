const Product = require('../models/product')

const getAllProductsStatic = async (req, res) => {
    const products = await Product.find({
        name: "vase table",
    })
    res.status(200).json({ products, nbHits: products.lenght })
}

const getAllProducts = async (req, res) => {
    const {name,featured,company} = req.query
    const queryObject = {}

    if (featured){
        queryObject.featured = featured === 'true'? true : false
    }
    if(company){
        queryObject.company = company
    }
    if(name){
        queryObject.company = name
    }
    console.log(queryObject)
    const products = await Product.find(queryObject);
    res.status(200).json(products)
}

module.exports = {
    getAllProductsStatic,
    getAllProducts
}