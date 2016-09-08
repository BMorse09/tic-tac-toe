'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');

const onSignUp = function (event) {
  let data = getFormFields(this);
  event.preventDefault();
  api.signUp(data)
  .done(ui.success)
  .fail(ui.failure);
};

const onSignIn = function (event) {
  let data = getFormFields(this);
  event.preventDefault();
  $('.player-id').text("Hello!: " + data);
  api.signIn(data)
  .done(ui.signInSuccess)
  .fail(ui.signInFailure);
};

const onChangePassword = function (event) {
  let data = getFormFields(this);
  event.preventDefault();
  api.changePassword(data)
  .done(ui.changePassSuccess)
  .fail(ui.failure);
};

const onSignOut = function (event) {
  event.preventDefault();
  api.signOut()
  .done(ui.signOutSuccess)
  .fail(ui.failure);
};

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut
};

// $('#sign-in').on('click', function() {
// $('#signInModal').modal('show');
// });
//
// $('#sign-in-button').on('click' ,function() {
// $('#signInModal').modal('hide');
// $('#sign-out').show();
// $('#change-password').show();
// $('#sign-up').hide();
// $('#sign-in').hide();
// });
//
// $(document).ready(function() {
// $('#sign-out').hide();
// $('#change-password').hide();
// $('#signInModal').modal('show');
// });
