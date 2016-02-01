// routine exercise show

Template.routineExerciseShow.helpers({
  routineExercise: function(){
    return RoutineExercise.findOne({ _id: this._id });
  },

  admin: function(){
    if(Meteor.users.findOne({ _id: Meteor.userId() }).profile.type.value !== 3){
      return true;
    } else {
      return false;
    }
  }
});

Template.routineExerciseShow.events({
  'click .nav--back': function(e, t){
    e.preventDefault();
    history.back();
  }
});
