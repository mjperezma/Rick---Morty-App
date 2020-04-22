import React from 'react';
import '../stylesheets/Filter.scss';

const FilterCharacters = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: 'name',
    });
  };
  return (
    <form className='input__container'>
      <label>¡Busca aquí tu personaje!</label>
      <input type='text' placeholder='Escribe aquí' className='input__text' name='name' id='name' onChange={handleChange} />
    </form>
  );
};

export default FilterCharacters;
