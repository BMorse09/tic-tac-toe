'use strict';

const app = require('../app');

const success = (data) => {
 // console.log(data);
};

const failure = (error) => {
 // console.log(error);
};


const getGameSuccess = (data) => {
  app.game = data.game;
  // console.log(data);
};

const newGameSuccess = (data) => {
  // console.log('data is', data);
  app.game = data.game;

};

const clearBoard = (data) => {
  app.game = data.game;
};

module.exports = {
  success,
  failure,
  getGameSuccess,
  clearBoard,
  newGameSuccess

};
