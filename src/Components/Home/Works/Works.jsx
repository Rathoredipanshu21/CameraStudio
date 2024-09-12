import React from 'react'
import './Works.css'
import itemsToShow from '../ShowPiece/Showdata'

const Works = () => {
  return (

    <>
    <div className='works'>
        <h1>Photography Services Offered By Wedding Photographer In Dhanbad</h1>
        <p>Planning an Indian wedding requires focusing on all the important aspects of the wedding. One such important aspect is finding the right wedding photographer who can provide the finest photography services. We at Guptafoto studio capture all the emotions and details on your wedding day to deliver you a fabulous wedding story.</p>
    </div>

    <div className="works-container">
      {/* Map through each item in the showdata */}
      {itemsToShow.map((item, index) => (
        <div key={index} className="works-item">
          <img src={item.image} alt={item.title} className="works-image" />
          <h2 className="works-title">{item.title}</h2>
          <div className="works-details">
            <p className="works-couple">{item.coupleName}</p>
            <p className="works-function">{item.function}</p>
          </div>
          <p className="works-description">{item.description}</p>
        </div>
      ))}
   
       
     
    </div>

    </>
  )
}

export default Works