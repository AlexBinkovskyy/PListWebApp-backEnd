import express from 'express' 
import { createProduct, getProdList } from '../controllers/prodControllers.js'

const productRouter = express.Router()

productRouter.get('/', getProdList)
productRouter.post('/', createProduct)

export default productRouter