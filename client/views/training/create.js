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
  'submit .form-create': function(e, t){
    e.preventDefault();

    var training = {
      instructor: t.find('#instructor').value,
      description: t.find('#description').value,
      practitioner: t.find('#practitioner').value,
      routines: [],
      status: true
    }

    Meteor.call('createTraining', training, function(err, result){
      if(err){
        console.log(err.reason);
      } else {
        Router.go('/training/show/' + result);
      }
    });
  }
});
