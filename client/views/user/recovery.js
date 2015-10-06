// user recovery

Template.userRecovery.helpers({
  resetPassword : function(t){
    return Session.get('resetPassword');
  }
});

Template.passwordRecovery.events({
  'submit #form-recovery-send' : function(e, t) {
    e.preventDefault()
    var email = trimInput(t.find('#recovery-email').value)

    if(isNotEmpty(email) && isEmail(email)){
      Accounts.forgotPassword({email: email}, function(err){
        if(err){
          console.log(err)
        }
      });
    }

    return false;
  },

  'submit #form-recovery' : function(e, t) {
    e.preventDefault();

    var pw = t.find('#new-password-password').value;

    if(isNotEmpty(pw) && isValidPassword(pw)){
      Accounts.resetPassword(Session.get('resetPassword'), pw, function(err){
        if(err){
          console.log(err);
        }
      });
    }

    return false;
  }
});
