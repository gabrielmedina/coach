// routine exercise methods

Meteor.methods({
  createRoutineExercise: function(routineExercise){
    return RoutineExercise.insert(routineExercise);
  },

  editRoutineExercise: function(id, routineExercise){
    return RoutineExercise.update({ _id: id }, { $set: routineExercise });
  },

  deleteRoutineExercise: function(id){
    return RoutineExercise.remove(id);
  },

  statusRoutineExercise: function(id){
    var routineExercise = RoutineExercise.findOne({ _id: id });

    if(routineExercise.status == true){
      RoutineExercise.update({ _id: routineExercise._id }, { $set: { status: false }});
    } else {
      RoutineExercise.update({ _id: routineExercise._id }, { $set: { status: true }});
    }
  }
});
