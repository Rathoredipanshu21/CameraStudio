import React from 'react';
import './GallerySection.css';
// import imageData from './imageData.json'; // Make sure this path is correct

const imageData =[
    {
      "id": 1,
      "title": "Image 1",
      "image": "https://images.unsplash.com/photo-1610173826014-d131b02d69ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW5kaWFuJTIwYnJpZGV8ZW58MHx8MHx8fDA%3D"
    },
    {
      "id": 2,
      "title": "Image 2",
      "image": "https://plus.unsplash.com/premium_photo-1682090806453-4793f414ab50?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aW5kaWFuJTIwYnJpZGV8ZW58MHx8MHx8fDA%3D"
    },
    {
      "id": 3,
      "title": "Image 3",
      "image": "https://plus.unsplash.com/premium_photo-1682090811844-e0a89fb2c780?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGluZGlhbiUyMGJyaWRlfGVufDB8fDB8fHww"
    },
    {
      "id": 4,
      "title": "Image 4",
      "image": "https://plus.unsplash.com/premium_photo-1682090795093-9b9434a455ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGluZGlhbiUyMGJyaWRlfGVufDB8fDB8fHww"
    },
    {
      "id": 5,
      "title": "Image 5",
      "image": "https://images.unsplash.com/photo-1625139108082-48bb424c2333?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGluZGlhbiUyMGJyaWRlfGVufDB8fDB8fHww"
    },
    {
      "id": 6,
      "title": "Image 6",
      "image": "https://images.unsplash.com/photo-1503160865267-af4660ce7bf2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGluZGlhbiUyMGJyaWRlfGVufDB8fDB8fHww"
    },
    {
      "id": 1,
      "title": "Image 1",
      "image": "https://images.unsplash.com/photo-1610173826014-d131b02d69ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW5kaWFuJTIwYnJpZGV8ZW58MHx8MHx8fDA%3D"
    },
    {
      "id": 2,
      "title": "Image 2",
      "image": "https://plus.unsplash.com/premium_photo-1682090806453-4793f414ab50?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aW5kaWFuJTIwYnJpZGV8ZW58MHx8MHx8fDA%3D"
    },
    {
      "id": 3,
      "title": "Image 3",
      "image": "https://plus.unsplash.com/premium_photo-1682090811844-e0a89fb2c780?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGluZGlhbiUyMGJyaWRlfGVufDB8fDB8fHww"
    },
    {
      "id": 4,
      "title": "Image 4",
      "image": "https://plus.unsplash.com/premium_photo-1682090795093-9b9434a455ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGluZGlhbiUyMGJyaWRlfGVufDB8fDB8fHww"
    },
    {
      "id": 5,
      "title": "Image 5",
      "image": "https://images.unsplash.com/photo-1625139108082-48bb424c2333?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGluZGlhbiUyMGJyaWRlfGVufDB8fDB8fHww"
    },
    {
      "id": 6,
      "title": "Image 6",
      "image": "https://images.unsplash.com/photo-1503160865267-af4660ce7bf2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGluZGlhbiUyMGJyaWRlfGVufDB8fDB8fHww"
    },
  ]
  

const GallerySection = () => {
  const gallery = imageData;

  return (
    
     
      <div className="image-grid">
        {gallery.map((item) => (
          <div key={item.id} className="image-item">
            <img src={item.image} alt={item.title} />
          </div>
        ))}
      </div>
   
  );
}

export default GallerySection;
