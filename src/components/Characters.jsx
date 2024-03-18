// Characters.js
import React, { useState, useEffect } from 'react';

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // Fetch character data from the Disney API
    fetch('https://disneyapi.dev/characters')
      .then(response => response.json())
      .then(data => setCharacters(data))
      .catch(error => console.error('Error fetching character data:', error));
  }, []);

  return (
    <div className="characters-container">
      <h1>All Characters</h1>
      {characters.map((character, index) => (
        <div className="character-card" key={index}>
          <img src={character.image} alt={character.name} />
          <h2>{character.name}</h2>
          <p>{character.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Characters;



