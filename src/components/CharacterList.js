import React from 'react';
import Character from './Character';

const CharacterList = (props) => {
  const dataCharacters = props.characters.map((character, id) => {
    return <Character key={id} character={character} />;
  });
  return (
    <section>
      <ul className='item__container'>{dataCharacters}</ul>
    </section>
  );
};

export default CharacterList;
