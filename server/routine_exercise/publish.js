// routine exercise publish

Meteor.publish('routineExercise', function(id){
  return RoutineExercise.find({ _id: id });
});


Meteor.publish('routineExercises', function(){
  return RoutineExercise.find({});
});
