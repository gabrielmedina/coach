// routine exercise show

Template.routineExerciseShow.helpers({
  routineExercise: function(){
    return RoutineExercise.findOne({ _id: this._id });
  }
});

Template.routineExerciseShow.events({
  'click .': function(e, t){

  }
});
