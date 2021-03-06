// routine exercise create

Template.routineExerciseCreate.helpers({
  exercises: function(){
    return Exercise.find({}, {sort: {name: 1}});
  }
});

Template.routineExerciseCreate.events({
  'submit .form--create': function(e, t){
    e.preventDefault();

    var routine_exercise = {
      exercise: t.find('#exercise').value,
      sets: t.find('#sets').value,
      reps: t.find('#reps').value,
      routine: this.routine_id,
      weight: t.find('#weight').value,
      interval: t.find('#interval').value,
      speed: t.find('#speed').value,
      execution: 0,
      done: false,
      status: true
    };

    Meteor.call('createRoutineExercise', routine_exercise, function(err){
      if(err){
        reason(err.reason, 'error');
      } else {
        reason('Feito', 'success');
        history.back();
      }
    });
  }
});
