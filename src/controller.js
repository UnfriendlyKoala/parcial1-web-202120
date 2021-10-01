const { response, request } = require('express');

const getPairsOfPlayers = async (req = request, resp = response, next) => {
  //Implementar logica aquí

  const altura = req.body.valor
  const jugadores = resp.datos.data.values;

  respuesta = [];

  let i = 0;
  while(i < jugadores.length) {
    let j = i + 1;
    while(j < jugadores.length) {
      if(jugadores[i].h_in + jugadores[j].h_in === altura){
        let jug1 = jugadores[i].first_name + " " + jugadores[j].last_name ;
        
        aplica = {
          j1 : jug1,
          j2 : jug2
        }
        respuesta.push(aplica);
      }
      j += 1;
    }

    i += 1;
  }

  return resp.json(respuesta);
};

module.exports = { getPairsOfPlayers };
