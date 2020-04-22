import React, {useState, useEffect} from 'react';
import '../stylesheets/App.scss';
import fetchRickyMorty from '../services/api';
import Header from './Header';
import CharacterList from './CharacterList';
import FilterCharacters from './FilterCharacter';

const App = () => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    fetchRickyMorty().then((data) => {
      setCharacters(data);
    });
  }, []);
  return (
    <div className='app__container'>
      <Header />
      <FilterCharacters />
      <CharacterList characters={characters} />
    </div>
  );
};

export default App;
