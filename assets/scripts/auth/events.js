'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');

const onSignUpUser = function (event) {
  let data = getFormFields(event.target);
  event.preventDefault();
  api.signUp(data)
  .done(ui.success)
  .fail(ui.failure);
};

const onSignInUser = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  // $('.player-id').text("Hello!: " + data);
  api.signIn(data)
  .done(ui.signInSuccess)
  .fail(ui.signInFailure);
};

const onChangePassword = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.changePassword(data)
  .done(ui.changePasswordSuccess)
  .fail(ui.failure);
};

const onSignOutUser = function () {
  api.signOut()
  .done(ui.signOutSuccess)
  .fail(ui.failure);
};

const onGetGameById = function (event) {
  event.preventDefault();
  api.getGameById()
    .done(ui.onGetGameByIdSuccess)
    .fail(ui.failure);
  console.log(data);
};

const clearBoard = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  ui.clearBoard();

};

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUpUser);
  $('#sign-in').on('submit', onSignInUser);
  $('#change-password').on('submit', onChangePassword);
  $('#sign-out-button').on('click', onSignOutUser);
  $('#getGameById').on('click', onGetGameById);
  $('#clear-board').on('submit', clearBoard);
};


module.exports = {
  addHandlers,
};
