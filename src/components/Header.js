import React from 'react';

function Header(props) {
  return (
    <header className='header'>
      <h1>The Witcher memory game</h1>
      <p>Get points for clicking on heroes, but don't click twice on the same one.</p>
      <div className='counter'>
        <div>Score: 10</div>
        <div>Highscore: 10</div>
      </div>
    </header>
  ) 
}

export default Header;
