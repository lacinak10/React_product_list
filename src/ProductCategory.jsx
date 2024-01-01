import ProductList from "./ProductList.jsx"



function ProductCategory({ products,check,search,category}) {
    
    const productsByCategory = []
    category.forEach(e => {
        productsByCategory.push(e)
        products.forEach(product => {
            if (product.category == e) {
                productsByCategory.push(product)
            }
        })
    })

    return (
        <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>prix</th>
                    </tr>
                </thead>
                <tbody>
                    {productsByCategory.map((e, index) => {
                        if (!e.name && !e.price) {
                            return <tr key={index}>
                                <th key={index} className="text-center">{e}</th>
                            </tr>
                        }
                        return <ProductList product={e} key={index} />
                      
                         
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default ProductCategory