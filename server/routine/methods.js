// routine methods

Meteor.methods({
  createRoutine: function(routine){
    var training = Training.findOne({ _id: routine.training });

    var id = Routine.insert(routine);

    training.routines.push(id);

    Training.update(
      { _id: routine.training },
      { $set: { routines: training.routines } }
    );

    return id;
  },

  editRoutine: function(id, routine){
    return Routine.update({ _id: id }, { $set: routine });
  },

  deleteRoutine: function(id){
    var routine = Routine.findOne({ _id: id });

    for(var i = 0; i< routine.exercises.length; i++){
      Meteor.call('deleteRoutineExercise', routine.exercises[i]);
    }

    var training = Training.findOne({ _id: routine.training });

    for(var i = 0; i < training.routines.length; i++){
      if(training.routines[i].indexOf(id) !== -1){
        training.routines.splice(i, 1);
        break;
      }
    }

    Training.update(
      { _id: routine.training },
      { $set: { routines: training.routines } }
    );

    Routine.remove(id);
  },

  statusRoutine: function(id){
    var routine = Routine.findOne({ _id: id });

    if(routine.status == true){
      Routine.update({ _id: routine._id }, { $set: { status: false }});
    } else {
      Routine.update({ _id: routine._id }, { $set: { status: true }});
    }
  }
});
