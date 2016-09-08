'use strict';

require('.example');

const authEvents = require('./assets/auth/events.js');
const gameEvents = require('./assets/game/game-logic.js');

$(() => {
  $('#createUser').on('submit', authEvents.onCreateUser);
  $('#signInUser').on('submit', authEvents.onSignInUser);
  $('#changePassword').on('submit', authEvents.onSignInUser);
  $('sign-out-modal-button').on('click', authEvents.onSignOutUser);
  $('new-game-button').on('click', gameEvents.onNewGame);
  $('.col-xs-4').on('click', gameEvents.setCharacter);

});
