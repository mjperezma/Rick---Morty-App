import React from 'react';
import CharacterCard from './CharacterCard';
import '../stylesheets/CharacterLlist.scss';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFrown} from '@fortawesome/free-solid-svg-icons';

const CharacterList = (props) => {
  const dontExist =
    props.characters.length === 0 ? (
      <h2 className='item__container--text'>
        This character: {props.value} doesn't exist.
        <FontAwesomeIcon icon={faFrown} />
      </h2>
    ) : (
      ''
    );

  return (
    <>
      {dontExist}
      <ul className='item__container'>
        {props.characters.map((character) => (
          <li key={character.id}>
            <CharacterCard character={character} />
          </li>
        ))}
      </ul>
    </>
  );
};

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CharacterList;
