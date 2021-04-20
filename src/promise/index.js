const fetchData = require("../fetshData");
const API = 'https://rickandmortyapi.com/api/character/';

var character = [];

for(let i=0; i<10; i++ ){
  fetchData(API)
    .then(data => {
      return fetchData(API + data.results[i].id);
    })
    .then(data => {
      character[i] = data.name 
      return fetchData(data.origin.url)
    })
    .then(data => {
      console.log(i+":"+character[i]+" - "+data.dimension)
    })
    .catch(err => console.error(err));
}
