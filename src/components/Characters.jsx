import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch character data from the Disney API
    fetch('https://api.disneyapi.dev/character')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch character data');
        }
        return response.json();
      })
      .then(data => {
        setCharacters(data.data);
      })
      .catch(error => {
        console.error('Error fetching character data:', error);
        setError(error.message);
      });
  }, []);

  return (
    <Container>
      <h1 className="mt-5 mb-4">More Disney Characters</h1>
      {error ? (
        <div className="error-message">{error}</div>
      ) : (
        <Row>
          {characters.map((character, index) => (
            <Col key={index} sm={12} md={6} lg={4} xl={4}>
              <div className="character-card mb-4">
                <div className="character-image">
                  <img src={character.imageUrl || './images/DISNEY.PNG'} alt={character.name} className="img-fluid" />
                </div>
                <h2>{character.name}</h2>
                <p>{character.description}</p> 
              </div>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}

export default Characters;