import React from 'react';

const Character = (props) => {
  console.log(props);
  return (
    <li className='item__list'>
      <h3 className='item__list--name'>{props.character.name}</h3>
      <img className='item__list--img' src={props.character.image} alt={props.character.name} />
      <p className='item__list--text'>{props.character.spiece}</p>
    </li>
  );
};

export default Character;
