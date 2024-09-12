// Allproduct.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Modal from './Modal';

const Allproduct = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({
    id: '',
    title: '',
    description: '',
    price: '',
    oldPrice: '',
    image: ''
  });

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/get');
      console.log('Response data:', response.data);

      let dataArray = response.data;

      if (!Array.isArray(dataArray)) {
        if (Array.isArray(response.data.data)) {
          dataArray = response.data.data;
        } else {
          throw new Error('Data is not in expected format');
        }
      }

      setTrendingProducts(dataArray);
    } catch (err) {
      console.log(err);
    }
  };

  const handleEditClick = (product) => {
    setCurrentProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setCurrentProduct({ ...currentProduct, image: files[0] });
    } else {
      setCurrentProduct({ ...currentProduct, [name]: value });
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', currentProduct.title);
    formData.append('description', currentProduct.description);
    formData.append('price', currentProduct.price);
    formData.append('oldPrice', currentProduct.oldPrice);
    formData.append('category', currentProduct.category);
    if (currentProduct.image instanceof File) {
      formData.append('image', currentProduct.image);
    }

    try {
      await axios.put(`http://localhost:5000/api/update/${currentProduct.id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setShowModal(false);
      fetchData(); // Refresh the data after update
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();

    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray('.product-grid').forEach((item, index) => {
      gsap.fromTo(item,
        { y: '+=100', opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 3,
          ease: 'slow',
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  return (
    <div className="trending-container" style={{paddingTop:'50px', overflowY:'hidden'}}>
      {/* <h1 className="trending-heading">Trending Products</h1> */}
      <div className="product-grid">
        {trendingProducts.map(product => (
          <div key={product.id} className="product-card">
            <img className="product-image" src={product.image.startsWith('http') ? product.image : 'http://localhost:5000/' + product.image} alt={product.title} />
            <div className="product-details">
              <h2 className="product-title">{product.title}</h2>
              <p className="product-description">{product.description}</p>
              <div className="product-price">
                <span className="current-price">{product.price}</span>
                {product.oldPrice && <span className="old-price">{product.oldPrice}</span>}
              </div>
              <button onClick={() => handleEditClick(product)}>Edit</button>
            </div>
          </div>
        ))}
      </div>
      <Modal
        show={showModal}
        onClose={handleCloseModal}
        product={currentProduct}
        onChange={handleChange}
        onUpdate={handleUpdate}
      />
    </div>
  );
};

export default Allproduct;
