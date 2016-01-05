// routine exercise create

Template.routineExerciseCreate.helpers({
  exercises: function(){
    return Exercise.find({}, {sort: {name: 1}});
  }
});

Template.routineExerciseCreate.events({
  'submit .form-create': function(e, t){
    e.preventDefault();

    var routine_exercise = {
      exercise: t.find('#exercise').value,
      sets: t.find('#sets').value,
      reps: t.find('#reps').value,
      routine: this.routine_id,
      status: true
    };

    Meteor.call('createRoutineExercise', routine_exercise, function(err){
      if(err){
        console.log(err.reason);
      } else {
        history.back();
      }
    });
  }
});
