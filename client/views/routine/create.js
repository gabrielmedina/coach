// routine create

Template.routineCreate.helpers({
  exercises: function(){
    return RoutineExercise.find({});
  }
});

Template.routineCreate.events({
  'submit .form--create': function(e, t){
    e.preventDefault();

    var routine = {
      description: t.find('#description').value,
      training: this.training_id,
      exercises: [],
      status: true
    };


    Meteor.call('createRoutine', routine, function(err){
      if(err){
        console.log(err.reason);
      } else {
        history.back();
      }
    });
  },

  'click .nav--back': function(e, t){
    e.preventDefault();
    history.back();
  }
});
