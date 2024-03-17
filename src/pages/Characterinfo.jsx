import React from 'react';
import { Link } from 'react-router-dom';

function Characterinfo() {
  const characters = [
    { name: 'Mickey Mouse', id: 'mickey' },
    { name: 'Minnie Mouse', id: 'minnie' },
    { name: 'Donald Duck', id: 'donald' },
    { name: 'Goofy', id: 'goofy' },
    { name: 'Pluto', id: 'pluto' },
    { name: 'Daisy Duck', id: 'daisy' },
    // Add more characters as needed
  ];

  let characterList = characters.map((character) => (
    <Link to={`/characters/${character.id}`} key={character.id}>
      <h2>{character.name}</h2>
    </Link>
  ));

  return <div className='characters'>{characterList}</div>;
}

export default Characterinfo;

