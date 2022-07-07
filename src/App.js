import React from 'react';
import Header from './components/Header';
import Body from './components/Body';
import heroes from './heroes/heroes';

function App() {
  const [heroes5, setHeroes5] = React.useState(select5Heroes());
  const [score, setScore] = React.useState(0);
  const [highScore, setHighScore] = React.useState(0);

  function select5Heroes() {
    const numbers = [];
    while (numbers.length < 5) {
      const number = Math.floor(Math.random() * heroes.length);
      if (numbers.indexOf(number) === -1) numbers.push(number);
    }
    return [
      heroes[numbers[0]],
      heroes[numbers[1]],
      heroes[numbers[2]],
      heroes[numbers[3]],
      heroes[numbers[4]],
    ];
  }

  function handleClick(id) {
    heroes.forEach((hero) => {
      if (hero.id === id) {
        if (hero.clicked) {
          setScore(0);
          heroes.forEach((hero) => {
            hero.clicked = false;
          });
          return;
        } else {
          setScore(score + 1);
          hero.clicked = true;
          if (score >= highScore) {
            setHighScore(score + 1);
          }
        }
      } else return;
    });
    setHeroes5(select5Heroes());
  }

  return (
    <div className="App">
      <Header score={score} highScore={highScore} />
      <Body onHandleClick={handleClick} heroes5={heroes5} />
    </div>
  );
}

export default App;
