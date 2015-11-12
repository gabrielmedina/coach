// user register

Template.userRegister.events({
  'submit #form-register': function(e, t){
    e.preventDefault();

    var email = t.find('#email').value;
    var password = t.find('#password').value;

    var profile = {
      name: t.find('#name').value,
      type: 3,
      status: true
    }

    Accounts.createUser({email: email, password: password, profile: profile}, function(err){
      if(err){
        console.log(err);
      }
    });

    return false;
  }
});
