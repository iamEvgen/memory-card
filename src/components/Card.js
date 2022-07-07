import React from 'react';

function Card(props) {
  console.log(props.hero);
  // const url = '../' + props.hero.url;
  // console.log(url);
  const cardImage = require('../heroes/Ciri.jpg');

  return (
    <div className='card'>
      <img className='card--image' src={cardImage} alt={props.hero.name}/>
      <div className='card--text'>{props.hero.name}</div>
    </div>
  ) 
}

export default Card;
