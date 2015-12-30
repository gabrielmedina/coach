// routine methods

Meteor.methods({
  createRoutine: function(routine){
    return Routine.insert(routine);
  },

  editRoutine: function(id, routine){
    return Routine.update({ _id: id }, { $set: routine });
  },

  deleteRoutine: function(id){
    return Routine.remove(id);
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
