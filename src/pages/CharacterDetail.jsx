import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CharacterDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch character data from the Disney API
    fetch(`https://api.disneyapi.dev/graphql/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch character data');
        }
        return response.json();
      })
      .then(data => {
        setCharacter(data.data);
      })
      .catch(error => {
        console.error('Error fetching character data:', error);
        setError(error.message);
      });
  }, [id]);

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (!character) {
    return <div>Loading...</div>;
  }

  return (
    <div className="character-detail">
      <h1>{character.name}</h1>
      <img src={character.imageUrl || 'placeholder.jpg'} alt={character.name} />
    </div>
  );
}

export default CharacterDetail;
