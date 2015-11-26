// prop create

Template.propCreate.helpers({
  
});

Template.propCreate.events({
  'submit .form-create': function(e, t){
    e.preventDefault();

    var prop = {
      name: t.find('#name').value,
      status: true
    };

    Meteor.call('createProp', prop, function(err){
      if(err){
        console.log(err.reason);
      } else {
        Router.go('/prop');
      }
    });
  }
});
