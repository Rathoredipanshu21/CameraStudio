import React, { useEffect, useState } from 'react';
import './Clients.css';
import clientsData from './ClientsData'; // Make sure this path is correct

const Clients = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % clientsData.length);
    }, 3000); // Every 3 seconds, move to the next client

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="clients-container">
      <div className="clients-content" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {clientsData.map((client, index) => (
          <div key={index} className="client-item">
            <div className="client-message">
              <p>{client.message}</p>
            </div>
            <div className="client-image">
              <img src={client.image} alt={client.name} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
