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

  const onNewGame = function (event) {
      event.preventDefault();
       $('.col-xs-4').html('');
      //  let data = {};
      //  api.newGame(data)
      // .done(ui.onNewGameSuccess)
      // .fail(ui.onError);


  };

  const onPlaceX = function (event) {
        if(!gameOver){
        let id=this.id;
          event.preventDefault();
        if (app.player === 'x') {
            app.player = 'o';
        let cellclicked = event.target;

        if (gameBoardArray[id] === '') {
            gameBoardArray[id] = 'o';
              $(cellclicked).html('O');
            gameOver = win(gameBoardArray, id);
        if  (gameOver === true) {
              $("#gameOver").html('player O wins!');

        }
          } else {
        }

      } else if (app.player === 'o') {
                 app.player = 'x';
        let cellclicked = event.target;

        if (gameBoardArray[id] === '') {
            gameBoardArray[id] = 'x';
              $(cellclicked).html('X');
            gameOver = win(gameBoardArray, id);
        if (gameOver === true) {
              $("#gameOver").html('player X wins!');

          }
        }
    }
  }
  // if (gameBoardArray[id] === '') {
  //   $("#new-game-button")
  // }
  // console.log(gameBoardArray);
};

let win = function (cells, id) {
  if (['0', '3', '6'].indexOf(id) > -1) {
      if ((cells[0] === cells[3]) && (cells[3] === cells[6])) {
        return true;
      }
  } else if (['1', '4', '7'].indexOf(id) > -1) {
      if ((cells[1] === cells[4]) && (cells[4] === cells[7])) {
        return true;
      }
  } else if (['2', '5', '8'].indexOf(id) > -1) {
      if ((cells[2] === cells[5]) && (cells[5] === cells[8])) {
        return true;
      }
  }


  if (['0', '1', '2'].indexOf(id) > -1) {
      if ((cells[0] === cells[1]) && (cells[1] === cells[2])) {
        return true;
      }
  } else if (['3', '4', '5'].indexOf(id) > -1) {
      if ((cells[3] === cells[4]) && (cells[4] === cells[5])) {
        return true;
      }
  } else if (['6', '7', '8'].indexOf(id) > -1) {
      if ((cells[6] === cells[7]) && (cells[7] === cells[8])) {
        return true;
      }
  }

  if (['0', '4', '8'].indexOf(id) > -1) {
      if ((cells[0] === cells[4]) && (cells[4] === cells[8])) {
        return true;
      }
  } else if (['2', '4', '6'].indexOf(id) > -1) {
      if ((cells[2] === cells[4]) && (cells[4] === cells[6])) {
        return true;
      }
  }

  return false;
};

module.exports = {
  changePlayer,
  onNewGame,
  gameBoardArray,
  onPlaceX
};
