


function ProductList({product}){

    return(
        <tr>
            <td>{product.name}</td>
            <td>{product.price}</td>
        </tr>
    )
}

export default ProductList