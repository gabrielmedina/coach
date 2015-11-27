// exercise methods

Meteor.methods({
  createExercise: function(exercise){
    return Exercise.insert(exercise);
  },

  editExercise: function(id, exercise){
    return Exercise.update({ _id: id }, { $set: exercise });
  },

  deleteExercise: function(id){
    return Exercise.remove(id);
  },

  statusExercise: function(id){
    var exercise = Exercise.findOne({ _id: id });

    if(exercise.status == true){
      Exercise.update({ _id: exercise._id }, { $set: { status: false }});
    } else {
      Exercise.update({ _id: exercise._id }, { $set: { status: true }});
    }
  }
});
