import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminUpload.css';

const FileUpload = () => {
    const [file, setFile] = useState(null);
    const [notification, setNotification] = useState('');
    const [images, setImages] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        fetchImages();
    }, []);

    const fetchImages = async () => {
        try {
            const response = await axios.get('http://localhost:5000/upload/images');
            setImages(response.data);
        } catch (err) {
            console.error('Error fetching images:', err);
        }
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        const fileTypes = /jpeg|jpg|png|gif/;
        const extname = fileTypes.test(selectedFile.name.toLowerCase());
        const mimetype = fileTypes.test(selectedFile.type);

        if (mimetype && extname) {
            setFile(selectedFile);
            setNotification('');
        } else {
            setFile(null);
            setNotification('Please upload image files only (jpeg, jpg, png, gif).');
        }
    };

    const handleUpload = () => {
        if (!file) {
            setNotification('Please select an image file to upload.');
            return;
        }

        const formData = new FormData();
        formData.append('image', file);

        axios.post('http://localhost:5000/upload/images', formData)
            .then(res => {
                setNotification('File uploaded successfully.');
                console.log(res.data);
                fetchImages(); // Refresh the images list
            })
            .catch(err => {
                setNotification('Error uploading file.');
                console.error(err);
            });
    };

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const handleDelete = (imageId) => {
        axios.delete(`http://localhost:5000/upload/images/${imageId}`)
            .then(response => {
                setNotification('Image deleted successfully');
                fetchImages(); // Refresh the images list
            })
            .catch(error => {
                setNotification('Error deleting image: ' + error.message);
                console.error('There was an error deleting the image!', error);
            });
    };

    return (
        <div className="container">
            <div className="upload-section">
                <input type="file" onChange={handleFileChange} />
                <button onClick={handleUpload}>Upload</button>
                {notification && <p className="notification">{notification}</p>}
            </div>
            <div className="images-list">
                {images.map(image => (
                    <div
                        key={image.id}
                        className={`image-container ${selectedImage === image ? 'selected' : ''}`}
                        onClick={() => handleImageClick(image)}
                    >
                        <img src={`http://localhost:5000/public/images/${image.image}`} alt="uploaded" />
                        <button onClick={() => handleDelete(image.id)}>Delete</button>
                    </div>
                ))}
            </div>
            {selectedImage && (
                <div className="selected-image">
                    <h3>Selected Image</h3>
                    <img src={`http://localhost:5000/public/images/${selectedImage.image}`} alt="selected" />
                </div>
            )}
        </div>
    );
};

export default FileUpload;
