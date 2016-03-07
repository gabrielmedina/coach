// training create

Template.trainingCreate.helpers({
  routines: function(){
    return Routine.find({});
  },

  practitioners: function(){
    return Meteor.users.find({'profile.type.value': 3});
  }
});

Template.trainingCreate.events({
  'submit .form--create': function(e, t){
    e.preventDefault();

    var training = {
      instructor: t.find('#instructor').value,
      description: t.find('#description').value,
      practitioner: this._id,
      routines: [],
      historical: [],
      execution: 0,
      status: true
    }

    Meteor.call('createTraining', training, function(err, result){
      if(err){
        reason(err.reason, 'error');
      } else {
        reason('Feito', 'success');
        Router.go('/training/show/' + result);
      }
    });
  }
});
