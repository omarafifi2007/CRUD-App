import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductDetails from "./ProductDetails";
function Products() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        GetAllProducts();
    }, [])

    const GetAllProducts = () => {
        fetch('http://localhost:9000/products').then((res) => res.json()).then((data) => {
            setProducts(data);
        })
    }

    const DeleteProduct = (productId) => {
        fetch(`http://localhost:9000/products/${productId}`, {
            method: "DELETE"
        }).then((res) => res.json()).then((data) => {
            GetAllProducts();
        })
    }

    return (
        <>
            <h1>Products Pages</h1>
            <Link to="/Products/Add" className="btn btn-success mt-3">Add New Product</Link>
            <table className="table table-striped mt-5">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        {/* <th>Description</th> */}
                        <th>Price</th>
                        <th>Operations</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((products) => {
                        return (
                            <tr key={products.id}>
                                <th>{products.id}</th>
                                <th>{products.title.slice(0, 19)}</th>
                                {/* <th>{products.description.slice(0, 20)}</th> */}
                                <th>{products.price}</th>
                                <td>
                                    <button className="btn btn-danger btn-sm me-3">Edit</button>
                                    <button onClick={() => DeleteProduct(products.id)} className="btn btn-info btn-sm me-3">Delete</button>
                                    <Link onClick={ProductDetails} to={`/product/${products.id}`} className="btn btn-primary btn-sm">View</Link>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}
export default Products;