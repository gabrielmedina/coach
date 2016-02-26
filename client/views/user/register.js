// user register

Template.userRegister.events({
  'submit .form--register': function(e, t){
    e.preventDefault();

    var email = t.find('#email').value;
    var password = t.find('#password').value;

    var profile = {
      name: t.find('#name').value,
      type: {
        name: 'Praticante',
        value: 3
      },
      status: true
    }

    Accounts.createUser({email: email, password: password, profile: profile}, function(err){
      if(err){
        reason(err.reason, 'error');
      } else {
        reason('Vamos treinar!', 'success');
      }
    });

    return false;
  }
});
