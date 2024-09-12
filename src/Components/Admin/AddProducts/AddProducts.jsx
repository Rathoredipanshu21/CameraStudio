import React, { useState } from 'react';
import axios from 'axios';
import './AddProducts.css';

const AddProducts = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [oldPrice, setOldPrice] = useState('');
    const [category, setCategory] = useState('');
    const [imageFile, setImageFile] = useState('');
    const [message, setMessage] = useState('');

    const handleImageChange = (e) => {
        const file = e.target.files[0];
     
        setImageFile(file);
        console.log(imageFile)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', imageFile);
        formData.append('title', title);
        formData.append('description', description);
        formData.append('price', price);
        formData.append('oldPrice', oldPrice);
        formData.append('category', category);
    
        // Logging FormData contents
        for (let [key, value] of formData.entries()) {
            console.log(key, value);
        }
    
        axios.post('http://localhost:5000/api/add-product', formData)
            .then(response => {
                setMessage('Product added successfully!');
                setTitle('');
                setDescription('');
                setPrice('');
                setOldPrice('');
                setCategory('');
                setImageFile(null); // Reset selected image
            })
            .catch(error => {
                if (error.response && error.response.data) {
                    setMessage('Error adding product: ' + error.response.data.error);
                } else {
                    setMessage('Error adding product: An unexpected error occurred.');
                    console.error('Error:', error.message);
                }
            });
    };
    

    return (
        <div className="add-products">
            <h2>Add Products</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" value={title} onChange={e => setTitle(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <textarea id="description" value={description} onChange={e => setDescription(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price:</label>
                    <input type="number" id="price" value={price} onChange={e => setPrice(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="oldPrice">Old Price:</label>
                    <input type="number" id="oldPrice" value={oldPrice} onChange={e => setOldPrice(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="category">Category:</label>
                    <select id="category" value={category} onChange={e => setCategory(e.target.value)} required>
                        <option value="">Select Category</option>
                        <option value="cotton-wear">Cotton Wear</option>
                        <option value="anarkali">Anarkali</option>
                        <option value="lehanga">Lehanga</option>
                        <option value="drapped-dress">Drapped Dress</option>
                        <option value="party-wear">Party Wear</option>
                        <option value="gown">Gown</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="image">Image:</label>
                    <input type="file" id="image" onChange={handleImageChange} accept="image/*" />
                </div>
                <button type="submit">Add Product</button>
                {message && <p>{message}</p>}
            </form>
        </div>
    );
};

export default AddProducts;
