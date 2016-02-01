// routine exercise index

Template.routineExercise.helpers({
  routineExercise: function(){
    return RoutineExercise.find({});
  },

  checkStatus: function(status){
    if(status){
      return ' list__link--active';
    } else {
      return ' list__link--inactive';
    }
  }
});

Template.routineExercise.events({
  'click .nav--back': function(e, t){
    e.preventDefault();
    history.back();
  }
});
