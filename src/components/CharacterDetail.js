import React from 'react';
import {Link} from 'react-router-dom';
import '../stylesheets/CharacterDetail.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowCircleLeft, faDizzy} from '@fortawesome/free-solid-svg-icons';

const CharacterDetail = (props) => {
  const {image, name, status, spiece, origin, episode} = props.character;
  const dontExist = status === 'Dead' ? <FontAwesomeIcon icon={faDizzy} /> : ' ¡Your character is alive! ';
  return (
    <main className='container__main'>
      <div className='container__main__div'>
        <Link to='/' className='container__main__link'>
          <p> Return to the starting box!</p>
          <span>
            <FontAwesomeIcon icon={faArrowCircleLeft} />
          </span>
        </Link>
      </div>
      <article className='container__article'>
        <img src={image} alt={name} className='container__article--img' />
        <section className='container__section'>
          <h3 className='container__section--name'>Name: {name}</h3>
          <p className='container__section--text'>State: {dontExist}</p>
          <p className='container__section--text'>Spiece: {spiece}</p>
          <p className='container__section--text'>Episodes: {episode.length}</p>
          <p className='container__section--text'>Origin: {origin}</p>
        </section>
      </article>
    </main>
  );
};

export default CharacterDetail;
