import React, { useState } from 'react';

const SearchFilters = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [character, setCharacter] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = () => {
    fetch(`https://api.disneyapi.dev/character?name=${searchTerm}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch character data');
        }
        return response.json();
      })
      .then(data => {
        if (data && data.data && data.data.length > 0) {
          setCharacter(data.data[0]);
          setError(null);
        } else {
          setCharacter(null);
          setError('Character not found');
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setCharacter(null);
        setError(error.message);
      });
  };

  return (
    <div>
      <div>
        <h3>Find your favorite Disney character below! Enter their name in the search bar and discover more about them</h3>
        <p></p>
      </div>
      <div className="search-filters">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search characters..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="character-details-container">
        {character && (
          <div className="character-details">
            <br />
            <h2>{character.name}</h2>
            <img src={character.imageUrl} alt={character.name} />
            <p>{character.description}</p>
          </div>
        )}
        {error && <div className="error-message">{error}</div>}
      </div>
    </div>
  );
}

export default SearchFilters;
