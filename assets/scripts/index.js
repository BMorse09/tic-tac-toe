'use strict';

const authEvents = require('./auth/events.js');
const gameEvents = require('./game/events.js');

$(() => {
  $('#createUser').on('submit', authEvents.onCreateUser);
  $('#signInUser').on('submit', authEvents.onSignInUser);
  $('#changePassword').on('submit', authEvents.onSignInUser);
  $('sign-out-modal-button').on('click', authEvents.onSignOutUser);
  $('new-game-button').on('click', gameEvents.onNewGame);
  $('.col-xs-4').on('click', gameEvents.onPlaceX);

});
