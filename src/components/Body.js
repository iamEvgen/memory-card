import React from 'react';
import Card from './Card'

function Body(props) {
  const Cards = props.heroes5.map((hero) => {
    return <Card key={hero.id} hero={hero} />
  })

  return (
    <main className='body'>
      {Cards}
    </main>
  )
}

export default Body;
