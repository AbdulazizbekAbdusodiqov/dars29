import express from "express"
import {validationProductsMiddleware} from '../middleware/index.js'
import { createProduct, deleteProduct, getAllProducts, getOneProduct, updateProduct } from "../controller/index.js"
export const productsRouter = express.Router()

//GET ALL
productsRouter.get('/', getAllProducts)

//GET BY ID
productsRouter.get('/:id', getOneProduct)

//CREATE
productsRouter.post('/', validationProductsMiddleware, createProduct)

//UPDATE BY ID
productsRouter.put('/:id', updateProduct)

//DELETE BY ID
productsRouter.delete('/:id', deleteProduct)
