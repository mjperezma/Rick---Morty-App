import React from 'react';
import '../stylesheets/Filter.scss';

const FilterCharacters = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: 'name',
    });
  };
  const handleForm = (ev) => {
    ev.preventDefault();
  };
  return (
    <form className='input__container' onChange={handleForm}>
      <label>¡Search here for your character!</label>
      <input type='text' placeholder='Write here' className='input__text' name='name' id='name' onChange={handleChange} />
    </form>
  );
};

export default FilterCharacters;
