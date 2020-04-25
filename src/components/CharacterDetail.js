import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import '../stylesheets/CharacterDetail.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowCircleLeft, faDizzy, faUserAlt, faHeartbeat} from '@fortawesome/free-solid-svg-icons';

const CharacterDetail = (props) => {
  const {image, name, status, spiece, origin, episode} = props.character;
  const dontExist =
    status === 'Dead' ? (
      <span className='icon__div'>
        Dead
        <FontAwesomeIcon className='icon__dead' icon={faDizzy} />
      </span>
    ) : (
      <span>
        Alive
        <FontAwesomeIcon className='icon__heart' icon={faHeartbeat} />
      </span>
    );
  const alienOrHuman =
    spiece === 'Human' ? (
      <span>
        Human
        <FontAwesomeIcon className='icon__human' icon={faUserAlt} />
      </span>
    ) : (
      <span>
        Alien <i className='fab fa-reddit-alien icon__alien'></i>
      </span>
    );
  return (
    <main className='container__main'>
      <div className='container__main__div'>
        <Link to='/' className='container__main__link'>
          <h3> Return to the starting box!</h3>
          <span>
            <FontAwesomeIcon icon={faArrowCircleLeft} />
          </span>
        </Link>
      </div>
      <article className='container__article'>
        <img src={image} alt={name} className='container__article--img' />
        <ul className='container__section'>
          <li>Name: {name}</li>
          <li>State: {dontExist}</li>
          <li>Spiece: {alienOrHuman}</li>
          <li>Episodes: {episode.length}</li>
          <li>Origin: {origin}</li>
        </ul>
      </article>
    </main>
  );
};

CharacterDetail.propTypes = {
  character: PropTypes.object,
};
export default CharacterDetail;
