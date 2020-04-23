import React, {Fragment} from 'react';
import CharacterList from './CharacterList';
import FilterCharacters from './FilterCharacter';
const Home = (props) => {
  return (
    <Fragment>
      <FilterCharacters handleFilter={props.handleFilter} />
      <CharacterList characters={props.characters} />
    </Fragment>
  );
};

export default Home;
