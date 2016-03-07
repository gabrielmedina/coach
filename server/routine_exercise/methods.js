// routine exercise methods

Meteor.methods({
  createRoutineExercise: function(routine_exercise){
    var routine = Routine.findOne({ _id: routine_exercise.routine });

    var id = RoutineExercise.insert(routine_exercise);

    routine.exercises.push(id);

    Routine.update(
      { _id: routine_exercise.routine },
      { $set: { exercises: routine.exercises } }
    );

    return id;
  },

  editRoutineExercise: function(id, routine_exercise){
    return RoutineExercise.update({ _id: id }, { $set: routine_exercise });
  },

  deleteRoutineExercise: function(id){
    var routine_exercise = RoutineExercise.findOne({ _id: id });

    var routine = Routine.findOne({ _id: routine_exercise.routine });

    for(var i = 0; i < routine.exercises.length; i++){
      if(routine.exercises[i].indexOf(id) !== -1){
        routine.exercises.splice(i, 1);
        break;
      }
    }

    Routine.update(
      { _id: routine_exercise.routine },
      { $set: { exercises: routine.exercises } }
    );

    RoutineExercise.remove(id);
  },

  executionRoutineExercise: function(id, exercise){
    return RoutineExercise.update({ _id: id }, { $set: exercise });
  },

  statusRoutineExercise: function(id){
    var routine_exercise = RoutineExercise.findOne({ _id: id });

    if(routine_exercise.status == true){
      RoutineExercise.update({ _id: routine_exercise._id }, { $set: { status: false }});
    } else {
      RoutineExercise.update({ _id: routine_exercise._id }, { $set: { status: true }});
    }
  }
});
