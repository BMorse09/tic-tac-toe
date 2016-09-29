'use strict';

const app = require('../app');

const success = (data) => {
  // app.user = data.user;
  // console.log(data);
};

const failure = (error) => {
  // console.log(error);
};

const signInSuccess = (data) => {
  app.user = data.user;
  // console.log(data);
  $('#sign-in-modal').modal('hide');
  $('#gameBoard').show();
   $('#new-game-button').click();

  };

const changePasswordSuccess = () => {
  // console.log('Password changed.');
  $('#gameBoard').hide();
};

const signOutSuccess = () => {
  app.user = null;
  $('#gameBoard').hide();
};

const onGetGameByIdSuccess = (data) => {
  // console.log(data.length);
  app.games = data.games;
  let length = app.games.length;
  $("#gameOver").html(length);
  // console.log(data);
};

module.exports = {
  success,
  failure,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess,
  onGetGameByIdSuccess
};
