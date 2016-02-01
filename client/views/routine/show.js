// routine show

Template.routineShow.helpers({
  routine: function(){
    return Routine.findOne({ _id: this._id });
  },

  admin: function(){
    if(Meteor.users.findOne({ _id: Meteor.userId() }).profile.type.value !== 3){
      return true;
    } else {
      return false;
    }
  }
});

Template.routineShow.events({
  'click .nav--back': function(e, t){
    e.preventDefault();
    history.back();
  }
});
