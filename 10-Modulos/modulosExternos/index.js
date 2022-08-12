// instalamos axios para llamar a un servicio externo

import axios  from 'axios';

axios.get('https://pokeapi.co/api/v2/pokemon/ditto') // nos devuelve todos los datos que sacamos de esta pagina
  .then(function (response) {                         //caso contrario nos devuelve error 
    // handle success
    console.log("Success")
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });