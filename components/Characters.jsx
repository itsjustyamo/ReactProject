

// import React, { useEffect, useState } from 'react';

// const Characters = () => {
//   // State to store characters data
//   const [characters, setCharacters] = useState([]);

//   // Function to fetch characters data
//   const fetchCharacters = async () => {
//     try {
//       const response = await fetch('https://disneyapi.dev/api/characters');
//       if (!response.ok) {
//         throw new Error('Failed to fetch characters');
//       }
//       const data = await response.json();
//       setCharacters(data.characters);
//     } catch (error) {
//       console.error('Error fetching characters:', error);
//     }
//   };

//   // Fetch characters data on component mount
//   useEffect(() => {
//     fetchCharacters();
//   }, []);

//   return (
//     <div>
//       <h2>Disney Characters</h2>
//       <ul>
//         {characters.map((character) => (
//           <li key={character.id}>{character.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };


import React, { useEffect, useState } from 'react';

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch('https://api.disneyapi.dev/character');
        if (!response.ok) {
          throw new Error('Failed to fetch characters: ' + response.status);
        }
        const data = await response.json();
        setCharacters(data.characters);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Disney Characters</h2>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>{character.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Characters;
