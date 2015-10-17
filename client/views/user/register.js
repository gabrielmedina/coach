// user register

Template.userRegister.events({
  'submit #form-register': function(e, t) {
    e.preventDefault();

    var name = t.find('#name').value;
    var email = t.find('#email').value;
    var password = t.find('#password').value;

    Accounts.createUser({email: email, password: password}, function(err){
      if(err){
        console.log(err);
      }
    });

    return false;
  }
});
