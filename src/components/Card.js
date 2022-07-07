import React from 'react';

function Card(props) {
  return (
    <div className='card'>
      <img className='card--image' src={require('../heroes/Ciri.jpg')} alt='weavess'/>
      <div className='card--text'>Ciri</div>
    </div>
  ) 
}

export default Card;
