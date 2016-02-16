// training show

Template.trainingShow.helpers({
  training: function(){
    return Training.findOne({ _id: this._id });
  }
});

Template.trainingShow.events({
  'click .execution__btn--initial': function(e, t) {
    e.preventDefault();

    var historical = Training.findOne({ _id: this._id }).historical || [];
    historical.push(new Date());

    var training = {
      execution: 1,
      historical: historical
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
  },

  'click .modal__link--close': function(e, t) {
    e.preventDefault();
    modal();
  }
});
