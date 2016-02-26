// user recovery

Template.userRecovery.helpers({
  resetPassword : function(t) {
    return Session.get('resetPassword');
  }
});

Template.userRecovery.events({
  'submit .form--send': function(e, t){
    e.preventDefault();

    var email = t.find('#email').value;

    Accounts.forgotPassword({email: email}, function(err){
      if(err){
        reason(err.reason, 'error');
      } else {
        reason('E-mail enviado', 'success');
      }
    });

    return false;
  },

  'submit .form--recovery': function(e, t) {
    e.preventDefault();

    var password = t.find('#password').value;

    Accounts.resetPassword(Session.get('resetPassword'), password, function(err){
      if(err){
        reason(err.reason, 'error');
      } else {
        Session.set('resetPassword', null);
        reason('Senha alterada', 'success');
        Router.go('/training');
      }
    });

    return false;
  }
});
