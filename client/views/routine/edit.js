// routine edit

Template.routineEdit.helpers({
  routine: function(){
    return Routine.findOne({ _id: this._id });
  },

  exercises: function(){
    return RoutineExercise.find({});
  }
});

Template.routineEdit.events({
  'submit .form-edit': function(e, t){
    e.preventDefault();

    var exercises = [];
    var exercisesElements = t.findAll('.exercises');

    for(var i = 0; i < exercisesElements.length; i++){
      if(exercisesElements[i].checked){
        exercises.push(exercisesElements[i].value);
      }
    }

    var routine = {
      description: t.find('#description').value,
      exercises: exercises
    }

    Meteor.call('editRoutine', this._id, routine, function(err){
      if(err){
        console.log(err.reason);
      } else {
        history.back();
      }
    });
  },

  'click .btn-status': function(e){
    e.preventDefault();

    Meteor.call('statusRoutine', this._id, function(err){
      if(err){
        console.log(err.reason);
      } else {
        history.back();
      }
    });
  },

  'click .btn-delete': function(e){
    e.preventDefault();

    Meteor.call('deleteRoutine', this._id, function(err){
      if(err){
        console.log(err.reason);
      } else {
        history.back();
      }
    });
  }
});
