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
      execution: 0,
      done: false,
      status: true
    };


    Meteor.call('createRoutine', routine, function(err){
      if(err){
        reason(err.reason, 'error');
      } else {
        reason('Feito', 'success');
        history.back();
      }
    });
  }
});
