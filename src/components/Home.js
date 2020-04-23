import React, {Fragment} from 'react';
import CharacterList from './CharacterList';
import FilterCharacters from './FilterCharacter';
const Home = (props) => {
  return (
    <Fragment>
      <FilterCharacters handleFilter={props.handleFilter} value={props.value} />
      <CharacterList characters={props.characters} value={props.value} />
    </Fragment>
  );
};

export default Home;
