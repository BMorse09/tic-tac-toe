'use strict';

const app = require ('../app');

const getGame = function (data){
    return $.ajax({
      url: app.host + '/games/' + data.getGameById,
      method: 'GET',
      headers: {
        Authorization: 'Token token=' + app.user.token
      },
    });
  };

  const newGame = (data) => {
    console.log('newGame data is', data);
    return $.ajax({
      url: app.host + '/games',
      method: "POST",
      headers: {
        Authorization: 'Token token=' + app.user.token,
      },
      data,
    });
  };

  const updateGame = (id,value,TorF) => {
    console.log('arguments are', id, value, TorF);
    console.log('app.game is', app.game);
    return $.ajax({
      url: app.host + '/games/'+app.game.id,
      method: "PATCH",
      headers: {
        Authorization: 'Token token=' + app.user.token,
      },
      data: {
        "game": {
          "cell": {
            "index": id,
            "value": value,
          },
          "over": TorF
        }
      }
    });
  };


  module.exports = {
    newGame,
    getGame,
    updateGame
  };
