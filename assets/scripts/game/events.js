'use strict';

const api = require('./api');
const ui = require('./ui');
const app = require('.././app');

let gameBoardArray = ['', '', '', '', '', '', '', '', '',];

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

const setCharacter = function (event) {
  event.preventDefault();
  if (app.player === 'x') {
    let cellclicked = event.target;
    $(cellclicked).html('x');
  } else if (app.player === 'o') {
    let cellclicked = event.target;
    $(cellclicked).html('o');
  }
};

const onPlaceX = function (event) {
  event.preventDefault();
  if (app.player === 'x') {
    app.player = 'o';
    let cellclicked = event.target;
    $(cellclicked).html('X');
  } else if (app.player === 'o') {
    app.player = 'x';
    let cellclicked = event.target;
    $(cellclicked).html('X');
  }
};

module.exports = {
  onNewGame,
  gameBoardArray,
  setCharacter,
  onPlaceX
};
