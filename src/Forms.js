import React, {useState, useEffect} from 'react';
import axios from "axios";

function Forms() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://6470ee763de51400f7252328.mockapi.io/products/Product')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();
        const data = {
            title: title,
            description: description,
            price: price,
            image: image
        }
        await axios.post("https://6470ee763de51400f7252328.mockapi.io/products/Product", data)
    }

    return (
        <div>
            {products.map((product) => (
                <div className={"card border-dark col-3"}>
                    <div key={product.id}>
                        <div className={"d-flex justify-content-center"}>
                            <h3>{product.title}</h3>
                        </div>
                        <img className="img-thumbnail" src={product.image} alt=""/>
                        <div className={"d-flex justify-content-center"}>
                            <p>{product.description}</p>
                        </div>
                        <div className={"d-flex justify-content-center"}>
                            <p>Price: {product.price} р.</p>
                        </div>
                    </div>
                </div>
            ))}
            <hr/>
            <h2>Add Product</h2>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Title:</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required/>
                </div>
                <div>
                    <label>Description:</label>
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} required/>
                </div>
                <div>
                    <label>Price:</label>
                    <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required/>
                </div>
                <div>
                    <label>Image URL:</label>
                    <input type="url" value={image} onChange={(e) => setImage(e.target.value)} required/>
                </div>
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
}

export default Forms;