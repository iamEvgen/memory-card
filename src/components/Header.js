import React from 'react';

function Header(props) {
  const styles = {
    border:
      props.score === 0 ? '5px solid #ffcc00' : '5px solid rgb(0, 0, 0, 0)',
  };

  const stylesScore = {
    color: props.score > 0 ? '#ffcc00' : 'rgb(230, 230, 230)',
  };

  return (
    <header style={styles} className="header">
      <h1>The Witcher memory game</h1>
      <p>
        Get points for clicking on heroes, but don't click twice on the same
        one.
      </p>
      <div className="counter">
        <div className='score' style={stylesScore}>Score: {props.score}</div>
        <div className='score'>Highscore: {props.highScore}</div>
      </div>
    </header>
  );
}

export default Header;
