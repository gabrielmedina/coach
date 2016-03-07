// training show

Template.trainingShow.helpers({
  training: function(){
    return Training.findOne({ _id: this._id });
  }
});

Template.trainingShow.events({
  'click .execution__btn--initial': function(e, t) {
    e.preventDefault();

    var trainingObj = Training.findOne({ _id: this._id });

    var historical = {
      practitioner: Meteor.userId(),
      training: {
        'description': trainingObj.description,
        'instructor': Meteor.users.findOne({ _id: trainingObj.instructor })
      },
      exercises: []
    };

    Meteor.call('createHistorical', historical, function(err, result){
      if(err){
        reason(err.reason, 'error');
      }
    });

    var training = {
      execution: 1
    };

    Meteor.call('executionTraining', this._id, training, function(err){
      if(err){
        reason(err.reason, 'error');
      } else {
        modal();
      }
    });
  },

  'click .execution__btn--finalize': function(e, t) {
    e.preventDefault();

    var training = {
      execution: 0
    };

    Meteor.call('executionTraining', this._id, training, function(err){
      if(err){
        reason(err.reason, 'error');
      } else {
        history.back();
      }
    });
  }
});
