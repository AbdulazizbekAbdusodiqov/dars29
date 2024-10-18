import express from "express"
import dotenv from "dotenv"
import { productsRouter } from "./router/index.js"

dotenv.config()

const PORT = process.env.PORT

const app = express()

app.use(express.json())


app.use("/product", productsRouter)

app.use((err, req, res)=>{
    if(err){
        return res.send({
            message : err.message
        })
    }
    return res.status(404).send({
        message : "Not found"
    })
})

app.listen(PORT, ()=>{
    console.log(`port ${PORT}`);
})