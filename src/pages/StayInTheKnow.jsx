<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Stay in the Know</title>
  <style>
    /* Add your CSS styles here */
    .signup {
      max-width: 400px;
      margin: 0 auto;
    }
    .form-group {
      margin-bottom: 1rem;
    }
    label {
      display: block;
      margin-bottom: 0.5rem;
    }
    input[type='text'],
    input[type='email'],
    select {
      width: 100%;
      padding: 0.5rem;
      font-size: 1rem;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-sizing: border-box;
    }
    button {
      background-color: #007bff;
      color: #fff;
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    button:hover {
      background-color: #0056b3;
    }
  </style>
</head>
<body>
  <div id="root"></div>

  <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/babel-standalone@6.26.0/babel.min.js"></script>

  <script type="text/babel">
    function StayInTheKnow() {
      const [name, setName] = React.useState('');
      const [email, setEmail] = React.useState('');
      const [favoriteCharacter, setFavoriteCharacter] = React.useState('');

      const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission (e.g., send data to backend)
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Favorite Disney Character:', favoriteCharacter);
        // Reset form fields after submission
        setName('');
        setEmail('');
        setFavoriteCharacter('');
      };

      return (
        <div className='signup'>
          <h1>Stay in the Know</h1>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <label htmlFor='name'>Name:</label>
              <input
                type='text'
                id='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='email'>Email:</label>
              <input
                type='email'
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='favoriteCharacter'>Favorite Disney Character:</label>
              <select
                id='favoriteCharacter'
                value={favoriteCharacter}
                onChange={(e) => setFavoriteCharacter(e.target.value)}
                required
              >
                <option value=''>Select...</option>
                <option value='Mickey Mouse'>Mickey Mouse</option>
                <option value='Minnie Mouse'>Minnie Mouse</option>
                <option value='Donald Duck'>Donald Duck</option>
                <option value='Goofy'>Goofy</option>
                <option value='Pluto'>Pluto</option>
                <option value='Daisy Duck'>Daisy Duck</option>
                {/* Add more characters as needed */}
              </select>
            </div>
            <button type='submit'>Submit</button>
          </form>
        </div>
      );
    }

    ReactDOM.render(<StayInTheKnow />, document.getElementById('root'));
  </script>
</body>
</html>

