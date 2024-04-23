import  Product from '../models/productModel.js'
import asyncHandler from 'express-async-handler'

 
//descget products
// @route GET/api/products
const getProducts = asyncHandler(async(req , res)=>{

  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options:'i',
        },
      }
    :{}

    const products = await Product.find({...keyword})
    res.json(products)
    console.log(`res.json`, res.json);
  })

  // desc get productById
  //@route  GET/api/products/:id

  const getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
  
    if (product) {
      res.json(product)
    } else {
      res.status(404)
      throw new Error('Product not found')
    }
  })
  

    // delete product
  //@route  DELETE/api/products/:id
  //@access Private/Admin

  const deleteProduct = asyncHandler(async(req ,res)=>{
    const product  = await Product.findById(req.params.id)
    if(product){
    await product.remove()
    res.json({message :'Product removed'})
    }
    else {
      res.status(404)
        throw new Error ('Product not found')
    } 
  })
// @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin
const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    name: 'Sample name',
    price: 0,
    user: req.user._id,
    image: '/images/sample.jpg',
    category: 'Sample category',
    gender :'women',
    countInStock: 0,
    description: 'Sample description',
  })

  const createdProduct = await product.save()
  res.status(201).json(product)
})


// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private/Admin
const updateProduct = asyncHandler(async (req, res) => {
  const {
    name,
    price,
    description,
    image,
    gender,
    category,
    countInStock,
  } = req.body

  const product = await Product.findById(req.params.id)

  if (product) {
    product.name = name
    product.price = price
    product.description = description
    product.image = image
    product.category = category
    product.gender = gender
    product.countInStock = countInStock

    const updatedProduct = await product.save()
    res.json(updatedProduct)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

  export {getProducts , getProductById  , deleteProduct , createProduct , updateProduct}
