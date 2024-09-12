import React from 'react';
import './ServiceMainSection.css';
// import serviceData from './ServiceData';
const serviceData =[
    {
      "title": "Wedding Photography",
      "description": "Capturing precious moments on your big day.",
      "image": "https://images.prismic.io/guptafoto/91b511ab-0200-4c03-a9e9-0049b4ba7c43_Bengali+Wedding+14-min.jpeg?auto=compress,format&rect=0,287,5946,3425&w=783&h=451"
    },
    {
      "title": "Event Videography",
      "description": "Documenting events in stunning video footage.",
      "image": "https://images.prismic.io/guptafoto/9ab03bd9-2644-4c24-ab52-cc4c3c43d22d_Bhupesh+%26+Sunaina+3.jpg?auto=compress,format&rect=0,268,6000,3456&w=783&h=451"
    },
    {
      "title": "Portrait Sessions",
      "description": "Creating timeless portraits for you and your loved ones.",
      "image": "https://images.prismic.io/guptafoto/8be03689-992c-4f62-a9a1-41311c29d26e_Komal+X+Harsh+Pre+Wedding+3.jpeg?auto=compress,format&rect=0,268,6000,3456&w=783&h=451"
    },
    {
      "title": "Destination Weddings",
      "description": "Providing photography and videography services for destination weddings.",
      "image": "https://images.prismic.io/guptafoto/fd2be157-cf67-4634-8703-9ddfc5f9f2e0_Bhaat+Bharna+and+Bhaat+Nyotana.png?auto=compress,format&rect=0,42,938,540&w=783&h=451"
    },
    {
      "title": "Photo Booth Rentals",
      "description": "Adding fun and excitement to your event with photo booth rentals.",
      "image": "https://images.unsplash.com/photo-1600519632668-eaf949664dcd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGhvdG8lMjBib290aCUyMGluZGlhfGVufDB8fDB8fHww"
    },
    {
      "title": "Drone Photography",
      "description": "Capturing aerial views and breathtaking shots with drone photography.",
      "image": "https://plus.unsplash.com/premium_photo-1714618849685-89cad85746b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZHJvbmUlMjBwaG90b2dyYXBoeSUyMGluZGlhfGVufDB8fDB8fHww"
    }
  ]
  

  

const ServiceMainSection = () => {
  return (
    <div className="service-main-section">
      {serviceData.map((item, index) => (
        <div key={index} className="service-item">
          <img src={item.image} alt={item.title} />
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ServiceMainSection;
