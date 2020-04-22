import React from 'react';
import '../stylesheets/Character.scss';

const Character = (props) => {
  return (
    <li className='item__list'>
      <img className='item__list--img' src={props.character.image} alt={props.character.name} />
      <section className='item__text'>
        <h3 className='item__list--name'>{props.character.name}</h3>
        <p className='item__list--text'>{props.character.spiece}</p>
      </section>
    </li>
  );
};

export default Character;
