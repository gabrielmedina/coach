// training methods

Meteor.methods({
  createTraining: function(training){
    Training.update({ practitioner: training.practitioner }, {$set : {status: false} }, {multi: true});

    return Training.insert(training);
  },

  editTraining: function(id, training){
    Training.update({ practitioner: training.practitioner }, {$set : {status: false} }, {multi: true});

    return Training.update({ _id: id }, { $set: training });
  },

  deleteTraining: function(id){
    var training = Training.findOne({ _id: id });

    for(var i = 0; i< training.routines.length; i++){
      Meteor.call('deleteRoutine', training.routines[i]);
    }

    return Training.remove(id);
  },

  executionTraining: function(id, training){
    Routine.update({ training: id }, {$set : {done: false} }, {multi: true});

    return Training.update({ _id: id }, { $set: training });
  },

  statusTraining: function(id){
    var training = Training.findOne({ _id: id });

    Training.update({ practitioner: training.practitioner }, {$set : {status: false} }, {multi: true});

    if(training.status == true){
      Training.update({ _id: training._id }, { $set: { status: false }});
    } else {
      Training.update({ _id: training._id }, { $set: { status: true }});
    }
  }
});
