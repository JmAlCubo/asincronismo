const fetchData = require('../fetshData');
const API = "https://rickandmortyapi.com/api/character/";

const consultaApi = async () => {
  try{
    let personajes = await fetchData(API);
    let personaje = await fetchData(API + personajes.results[0].id);
    let origen = await fetchData(personaje.origin.url);

    console.log(personajes.info.count);
    console.log(personaje.name);
    console.log(origen.dimension);
  } catch (error) {
    console.error(error)
  }
}

consultaApi();