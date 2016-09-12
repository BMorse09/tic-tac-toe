'use strict';

const app = require('../app');

const success = (data) => {
 console.log(data);
};

const failure = (error) => {
 console.log(error);
};


const getGameByIdSuccess = (data) => {
  app.game = data.game;
  console.log(data);
};

const clearBoard = (data) => {
  app.game = data.game;
};

module.exports = {
  success,
  failure,
  getGameByIdSuccess,

};
