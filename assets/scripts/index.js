'use strict';

const authEvents = require('./auth/events.js');
const gameEvents = require('./game/events.js');
const modalEventHandlers = function (){
      $('#sign-up-button').on ('click', function(){

        $('#sign-up-modal').modal('show');
      });

      $('#sign-in-button').on ('click', function(){
        $('#sign-in-modal').modal('show');
      });

      $('#sign-out-button').on('click', authEvents.onSignOutUser);
      };

      $('#change-password-button').on('click',function(){
        $('#change-password-modal').modal('show');
      });

$(() => {
  // $('#sign-up').on('submit', authEvents.onSignUpUser);
  // $('#sign-in').on('submit', authEvents.onSignInUser);
  // $('#change-Password').on('submit', authEvents.onChangePassword);
  // $('sign-out-modal-button').on('click', authEvents.onSignOutUser);
  $('#new-game-button').on('click', gameEvents.onNewGame);
  $('.col-xs-4').on('click', gameEvents.onPlaceX);
  $('#getGameById').on('click', gameEvents.onGetGameById);

  modalEventHandlers ();
  $('#gameBoard').hide();
  authEvents.addHandlers();
});
