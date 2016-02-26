// routine show

Template.routineShow.helpers({
  routine: function(){
    return Routine.findOne({ _id: this._id });
  }
});

Template.routineShow.events({
  'click .execution__btn--initial': function(e, t) {
    e.preventDefault();

    var routines = Historical.find({ practitioner: Meteor.userId() }, { sort: {createdAt: -1 }}).routines || [];
    routines.push(this._id);

    var historical = {
      routines: routines
    }

    Meteor.call('editHistorical', Session.get('historical'), historical, function(err, result){
      if(err){
        reason(err.reason, 'error');
      }
    });

    var routine = {
      execution: 1
    };

    Meteor.call('executionRoutine', this._id, routine, function(err){
      if(err){
        reason(err.reason, 'error');
      } else {
        modal();
      }
    });
  },

  'click .execution__btn--finalize': function(e, t) {
    e.preventDefault();

    var routine = {
      execution: 0,
      done: true
    };

    Meteor.call('executionRoutine', this._id, routine, function(err){
      if(err){
        reason(err.reason, 'error');
      } else {
        history.back();
      }
    });
  }
});
