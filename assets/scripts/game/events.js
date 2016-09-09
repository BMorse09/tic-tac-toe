'use strict';

const api = require('./api');
const ui = require('./ui');
const app = require('.././app');

let gameBoardArray = ['', '', '', '', '', '', '', '', ''];

const changePlayer = () => {
  if (app.player === 'x') {
    app.player = 'o';
  }
  else if (app.player === 'o') {
    app.player = 'x';
  }
};

const onNewGame = function onNewGame (event) {
  event.preventDefault();
  $('.col-xs-4').html('');
  let data = {};
  api.newGame(data)
    .done(ui.onNewGameSuccess)
    .fail(ui.onError);
};

const onPlaceX = function (event) {
  let id=this.id;
  event.preventDefault();
  if (app.player === 'x') {
    app.player = 'o';
    let cellclicked = event.target;
    $(cellclicked).html('O');

    gameBoardArray[id] = app.player;
    console.log(gameBoardArray);

  } else if (app.player === 'o') {
    app.player = 'x';
    let cellclicked = event.target;
    $(cellclicked).html('X');

    gameBoardArray[id] = app.player;
    console.log(gameBoardArray);
  }
};

module.exports = {
  changePlayer,
  onNewGame,
  gameBoardArray,
  onPlaceX
};
