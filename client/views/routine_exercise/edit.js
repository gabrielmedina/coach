// routine exercise edit

Template.routineExerciseEdit.helpers({
  exercises: function(){
    return Exercise.find({}, {sort: {name: 1}});
  },

  routineExercise: function(){
    return RoutineExercise.findOne({ _id: this._id });
  }
});

Template.routineExerciseEdit.events({
  'submit .form--edit': function(e, t){
    e.preventDefault();

    var routine_exercise = {
      exercise: t.find('#exercise').value,
      sets: t.find('#sets').value,
      reps: t.find('#reps').value
    };

    Meteor.call('editRoutineExercise', this._id, routine_exercise, function(err){
      if(err){
        reason(err.reason, 'error');
      } else {
        reason('Feito', 'success');
        history.back();
      }
    });
  },

  'click .btn--status': function(e){
    e.preventDefault();

    Meteor.call('statusRoutineExercise', this._id, function(err){
      if(err){
        reason(err.reason, 'error');
      } else {
        reason('Feito', 'success');
        history.back();
      }
    });
  },

  'click .btn--delete': function(e){
    e.preventDefault();

    Meteor.call('deleteRoutineExercise', this._id, function(err){
      if(err){
        reason(err.reason, 'error');
      } else {
        reason('Feito', 'success');
        history.back();
      }
    });
  }
});
