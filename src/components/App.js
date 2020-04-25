import React, {useState, useEffect} from 'react';
import {Route, Switch} from 'react-router-dom';
import '../stylesheets/App.scss';
import fetchRickyMorty from '../services/api';
import Header from './Header';
import CharacterDetail from './CharacterDetail';
import Home from './Home';

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
  };

  const sortNames = characters.sort((a, b) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    return 0;
  });

  const renderFilterCharacter = characters.filter((character) => {
    return character.name.toUpperCase().includes(characterFilter.toUpperCase());
  });

  const renderCharacterDetail = (props) => {
    const characterId = parseInt(props.match.params.id);
    const foundCharacter = characters.find((character) => character.id === characterId);
    if (foundCharacter === undefined) {
      return <p className='app__container--text'>This character doesn't exist in this litle world</p>;
    } else {
      return <CharacterDetail character={foundCharacter} />;
    }
  };

  return (
    <div className='app__container'>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home characters={renderFilterCharacter} value={characterFilter} sort={sortNames} handleFilter={handleFilter} />
        </Route>
        <Route path='/character/:id' render={renderCharacterDetail} />
      </Switch>
    </div>
  );
};

export default App;
