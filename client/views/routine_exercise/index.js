// routine exercise index

Template.routineExercise.helpers({
  routineExercise: function(){
    return RoutineExercise.find({});
  },

  checkStatus: function(status){
    if(status){
      return ' link--active';
    } else {
      return ' link--inactive';
    }
  }
});

Template.routineExercise.events({

});
