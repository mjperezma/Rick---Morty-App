import React, {useState, useEffect} from 'react';
import '../stylesheets/App.scss';
import fetchRickyMorty from '../services/api';
import Header from './Header';
import CharacterList from './CharacterList';
import FilterCharacters from './FilterCharacter';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [characterFilter, setCharacterFilter] = useState('');

  useEffect(() => {
    fetchRickyMorty().then((data) => {
      setCharacters(data);
    });
  }, []);

  const handleFilter = (data) => {
    if (data.key === 'name') {
      setCharacterFilter(data.value);
    }
    console.log('me llaman en app', data);
  };

  const renderFilterCharacter = characters.filter((character) => {
    return character.name.toUpperCase().includes(characterFilter.toUpperCase());
  });
  return (
    <div className='app__container'>
      <Header />
      <FilterCharacters handleFilter={handleFilter} />
      <CharacterList characters={renderFilterCharacter} />
    </div>
  );
};

export default App;
