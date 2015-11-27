// training methods

Meteor.methods({
  createTraining: function(training){
    return Training.insert(training);
  },

  editTraining: function(id, training){
    return Training.update({ _id: id }, { $set: training });
  },

  deleteTraining: function(id){
    return Training.remove(id);
  },

  statusTraining: function(id){
    var training = Training.findOne({ _id: id });

    if(training.status == true){
      Training.update({ _id: training._id }, { $set: { status: false }});
    } else {
      Training.update({ _id: training._id }, { $set: { status: true }});
    }
  }
});
