// prop create

Template.propCreate.helpers({

});

Template.propCreate.events({
  'submit .form--create': function(e, t){
    e.preventDefault();

    var prop = {
      name: t.find('#name').value,
      status: true
    };

    Meteor.call('createProp', prop, function(err){
      if(err){
        reason(err.reason, 'error');
      } else {
        reason('Feito', 'success');
        Router.go('/prop');
      }
    });
  }
});
