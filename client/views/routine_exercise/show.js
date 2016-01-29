// routine exercise show

Template.routineExerciseShow.helpers({
  routineExercise: function(){
    return RoutineExercise.findOne({ _id: this._id });
  }
});

Template.routineExerciseShow.events({
  'click .btn--back': function(e, t){
    e.preventDefault();    
    history.back();
  }
});
