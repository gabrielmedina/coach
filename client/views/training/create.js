// training create

Template.trainingCreate.helpers({
  practitioners: function(){
    return Meteor.users.find({'profile.type.value': 3});
  },

  routines: function(){
    return Routine.find({});
  }
});

Template.trainingCreate.events({
  'submit .form-create': function(e, t){
    e.preventDefault();

    var routines = [];
    var routinesElements = t.findAll('.routines');

    for(var i = 0; i < routinesElements.length; i++){
      if(routinesElements[i].checked){
        routines.push(routinesElements[i].value);
      }
    }

    var training = {
      instructor: t.find('#instructor').value,
      description: t.find('#description').value,
      practitioner: t.find('#practitioner').value,
      routines: routines,
      status: true
    }

    Meteor.call('createTraining', training, function(err){
      if(err){
        console.log(err.reason);
      } else {
        Router.go('/training');
      }
    });
  }
});
