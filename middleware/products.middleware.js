export const validationProductsMiddleware = (req, res, next) => {
    const {model, price, company} = req.body

    if(!model || !price || !company){
        res.status(400).send("Model, price and company is not valid")
    }
    if(price <= 0 || isNaN(price)){
        res.status(400).send("price type in not number")
    }

    next()
}

