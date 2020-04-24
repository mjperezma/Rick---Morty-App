import React, {Fragment} from 'react';
import CharacterList from './CharacterList';
import PropTypes from 'prop-types';
import FilterCharacters from './FilterCharacter';
const Home = (props) => {
  return (
    <Fragment>
      <FilterCharacters handleFilter={props.handleFilter} value={props.value} />
      <CharacterList characters={props.characters} value={props.value} />
    </Fragment>
  );
};

Home.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object).isRequired,
  value: PropTypes.string,
  handleFilter: PropTypes.func,
};
export default Home;
