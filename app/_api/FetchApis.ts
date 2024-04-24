

export const fetchCategories = async () => {
    const Data = await fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
    if (Data) {
        return Data
    }
    return null
}


export const fetchProductsWithLimit = async (limit: number) => {
    const Data = await fetch(`https://fakestoreapi.com/products?limit=${limit}`)
            .then(res=>res.json())
    if (Data) {
        return Data
    }
    return null

}

export const fetchProductWithCategory = async(category: string) => {
    const Data = await fetch(`https://fakestoreapi.com/products/category/${category}`).then(res=>res.json())
    if (Data) {
        return Data
    }
    return null
}
