import React from 'react';

function Card(props) {
  const cardImage = require('../' + props.hero.url);

  return (
    <div className="card">
      <img
        onClick={() => {
          props.onHandleClick(props.hero.id);
        }}
        className="card--image"
        src={cardImage}
        alt={props.hero.name}
      />
      <div className="card--text">{props.hero.name}</div>
    </div>
  );
}

export default Card;
