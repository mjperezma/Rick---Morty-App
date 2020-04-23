import React from 'react';
import Character from './Character';
import '../stylesheets/CharacterLlist.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFrown} from '@fortawesome/free-solid-svg-icons';

const CharacterList = (props) => {
  console.log(props);
  const dontExist =
    props.characters.length === 0 ? (
      <h2 className='item__container--text'>
        This character: {props.value} doesn't exist <FontAwesomeIcon icon={faFrown} /> Try again!
      </h2>
    ) : (
      ''
    );

  return (
    <section>
      {dontExist}
      <ul className='item__container'>
        {props.characters.map((character) => (
          <li key={character.id}>
            <Character character={character} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CharacterList;
