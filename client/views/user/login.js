// user login

Template.userLogin.events({
  'submit .form--login': function(e, t){
    e.preventDefault();

    var email = t.find('#email').value;
    var password = t.find('#password').value;

    Meteor.loginWithPassword(email, password, function(err){
      if(err){
        console.log(err.reason);
      }
    });

    return false;
  }
});
