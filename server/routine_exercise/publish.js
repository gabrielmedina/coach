// routine exercise publish

Meteor.publish('routineExercises', function(){
  return RoutineExercise.find({});
});
