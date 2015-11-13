// accounts creation

Accounts.onCreateUser(function(options, user) {
  user.profile = options.profile || {};

  user.profile = options.profile;

  return user;
});
