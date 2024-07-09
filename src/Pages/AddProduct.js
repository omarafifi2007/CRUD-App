// import axios from 'axios';
import { useState } from "react";

function AddProduct() {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);

    const formSubmit = (e) => {
        e.preventDefault();

        // axios.post('http://localhost:9000/products', {
        //     title,
        //     price
        // }).then((data) => console.log(data));

        fetch('http://localhost:9000/products', {
            method: 'POST',
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify({
                title,
                price,
            }),
        })
            .then((res) => res.json())
            .then((data) => { console.log(data) })
    }
    return (
        <>
            <h1>Add Product</h1>
            <form onSubmit={formSubmit}>
                <div className="mb-3">
                    <label htmlFor="Product Title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="Product Title" aria-describedby="Product Title" onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="Product Price" className="form-label">Price</label>
                    <input type="number" className="form-control" id="Product Price" aria-describedby="Product Price" onChange={(e) => setPrice(+e.target.value)} />
                </div>

                <button type="submit" className="btn btn-primary">Add Product</button>
            </form>
        </>
    )
}
export default AddProduct;