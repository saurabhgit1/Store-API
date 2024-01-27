const getAllProducts = (req, res) => {
    throw new Error("bhej error");
    res.send("All Products");
}

const getAllProductsStatic = (req, res) => {
    res.send("All Products Static");
}

export { getAllProducts, getAllProductsStatic };