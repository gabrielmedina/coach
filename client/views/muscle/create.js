// muscle create

Template.muscleCreate.helpers({

});

Template.muscleCreate.events({
  'submit .form--create': function(e, t){
    e.preventDefault();

    var muscle = {
      name: t.find('#name').value,
      status: true
    };

    Meteor.call('createMuscle', muscle, function(err){
      if(err){
        reason(err.reason, 'error');
      } else {
        Router.go('/muscle');
      }
    });
  }
});
