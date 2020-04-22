import React, {useState, useEffect} from 'react';
import '../stylesheets/App.scss';
import fetchRickyMorty from '../services/api';

const App = () => {
  useEffect(() => {
    console.log('me esta pasando algo aquí');
    fetchRickyMorty().then((data) => {
      console.log(data);
    });
  });
  return <div className='app'>¡Holi!</div>;
};

export default App;
