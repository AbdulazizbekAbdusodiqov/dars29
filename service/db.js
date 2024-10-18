import fs from "fs"
import {join} from "node:path"

const filePath = join(import.meta.dirname, "..", "database", "products.json" )

export const readProductsJson = () => {
    const data = fs.readFileSync(filePath, "utf-8")

    return JSON.parse(data)
} 

export const writeProductsJson = (product) => {
    // console.log(product);
    let data = JSON.parse(fs.readFileSync(filePath, "utf-8"))
    data.push(product)
    fs.writeFileSync(filePath, JSON.stringify(data), "utf-8")
    // return JSON.parse(data)
} 

export const writeAllProductsJson = (data) => {    
    fs.writeFileSync(filePath, JSON.stringify(data))
}