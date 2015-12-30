// routine exercise index

Template.routineExercise.helpers({
  routineExercise: function(){
    return RoutineExercise.find({});
  },

  checkStatus: function(status){
    if(status){
      return ' active';
    } else {
      return ' inactive';
    }
  }
});

Template.routineExercise.events({

});
