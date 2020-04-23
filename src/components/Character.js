import React from 'react';
import '../stylesheets/Character.scss';
import {Link} from 'react-router-dom';

const Character = (props) => {
  const {image, name, spiece, id} = props.character;

  return (
    <article className='item__list' key={id}>
      <img className='item__list--img' src={image} alt={`Foto de ${name}`} />
      <section className='item__text'>
        <Link to={`/character/${id}`}>
          <h3 className='item__list--name'>{name}</h3>
          <p className='item__list--text'>{spiece}</p>
        </Link>
      </section>
    </article>
  );
};

export default Character;
