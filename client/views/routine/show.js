// routine show

Template.routineShow.helpers({
  routine: function(){
    return Routine.findOne({ _id: this._id });
  }
});

Template.routineShow.events({
  
});
