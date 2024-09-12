// Modal.js
import React from 'react';
import './Modal.css';

const Modal = ({ show, onClose, product, onChange, onUpdate }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Edit Product</h2>
        <form onSubmit={onUpdate}>
          <label>
            Title:
            <input type="text" name="title" value={product.title} onChange={onChange} />
          </label>
          <label>
            Description:
            <textarea name="description" value={product.description} onChange={onChange}></textarea>
          </label>
          <label>
            Price:
            <input type="number" name="price" value={product.price} onChange={onChange} />
          </label>
          <label>
            Old Price:
            <input type="number" name="oldPrice" value={product.oldPrice} onChange={onChange} />
          </label>
          <label>
            Category:
            <input type="text" name="category" value={product.category} onChange={onChange} />
          </label>
          <label>
            Image:
     
            <input type="file" name="image" onChange={onChange} />
          </label>
          <button type="submit">Update</button>
          <button type="button" onClick={onClose}>Close</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
