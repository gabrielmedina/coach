// routine create

Template.routineCreate.helpers({
  exercises: function(){
    return RoutineExercise.find({});
  }
});

Template.routineCreate.events({
  'submit .form-create': function(e, t){
    e.preventDefault();

    var exercises = [];
    var exercisesElements = t.findAll('.exercises');

    for(var i = 0; i < exercisesElements.length; i++){
      if(exercisesElements[i].checked){
        exercises.push(exercisesElements[i].value);
      }
    }

    var routine = {
      description: t.find('#description').value,
      exercises: exercises,
      status: true
    };

    Meteor.call('createRoutine', routine, function(err){
      if(err){
        console.log(err.reason);
      } else {
        Router.go('/routine');
      }
    });
  }
});
