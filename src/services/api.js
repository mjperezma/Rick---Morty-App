const fetchRickyMorty = () => {
  return fetch('https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json')
    .then((response) => response.json())
    .then((data) => {
      return data.results.map((character) => {
        return {
          id: character.id,
          name: character.name,
          spiece: character.species,
          image: character.image,
          status: character.status,
          episode: character.episode,
          origin: character.origin.name,
        };
      });
    });
};

export default fetchRickyMorty;
