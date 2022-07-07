import React from 'react';
import Header from './components/Header';
import Body from './components/Body';
import heroes from './heroes/heroes';

function App() {
  function select5Heroes() {
    const numbers = [];
    while (numbers.length < 5) {
      const number = Math.floor(Math.random() * heroes.length) + 1;
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

  return (
    <div className="App">
      <Header />
      <Body heroes5={select5Heroes()} />
    </div>
  );
}

export default App;
