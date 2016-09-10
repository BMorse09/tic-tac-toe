'use strict';

const api = require('./api');
const ui = require('./ui');
const app = require('.././app');

let gameBoardArray = ['', '', '', '', '', '', '', '', ''];
let gameOver = false;

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
  if(!gameOver){
    let id=this.id;
    event.preventDefault();
    if (app.player === 'x') {
      app.player = 'o';
      let cellclicked = event.target;

      console.log('yoyo', gameBoardArray[id], gameBoardArray[id] !== '');

      if (gameBoardArray[id] === '') {
        gameBoardArray[id] = 'O';
        $(cellclicked).html('O');
        gameOver = win(gameBoardArray, id);
        if (gameOver === true) {
          $("#gameOver").html('Player O wins!');

        }
      } else {
        console.log ("this space is full");
      }

      console.log(gameBoardArray);

    } else if (app.player === 'o') {
      app.player = 'x';
      let cellclicked = event.target;

        if (gameBoardArray[id] === '') {
          gameBoardArray[id] = 'X';
          $(cellclicked).html('X');
          gameOver = win(gameBoardArray, id);
          if (gameOver === true) {
            $("#gameOver").html('Player X wins!');
          }
        } else {
          console.log ("this space is full");
        }

      console.log(gameBoardArray);
    }
  }
};

let win = function (cells, id) {
  // horiz
  if (['0', '1', '2'].indexOf(id) > -1) {
      return((cells[0] === cells[1]) && (cells[1] === cells[2]));
  } else if (['3', '4', '5'].indexOf(id) > -1) {
      return ((cells[3] === cells[4]) && (cells[4] === cells[5]));
  } else if (['6', '7', '8'].indexOf(id) > -1) {
      return ((cells[6] === cells[7]) && (cells[7] === cells[8]));
  }

  // vert
  if (['0', '3', '6'].indexOf(id) > -1) {
      return ((cells[0] === cells[3]) && (cells[3] === cells[6]));
  } else if (['1', '4', '7'].indexOf(id) > -1) {
      return ((cells[1] === cells[4]) && (cells[4] === cells[7]));
  } else if (['2', '5', '8'].indexOf(id) > -1) {
      return ((cells[2] === cells[5]) && (cells[5] === cells[8]));
  }

  // diag
  if (['0', '4', '8'].indexOf(id) > -1) {
      return (cells[0] === cells[4]) && (cells[4] === cells[8]);
  }
  if (['2', '4', '6'].indexOf(id) > -1) {
      return (cells[2] === cells[4]) && (cells[4] === cells[6]);
  }

  return false;
};

module.exports = {
  changePlayer,
  onNewGame,
  gameBoardArray,
  onPlaceX
};
