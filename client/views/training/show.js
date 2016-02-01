// training show

Template.trainingShow.helpers({
  admin: function(){
    if(Meteor.users.findOne({ _id: Meteor.userId() }).profile.type.value !== 3){
      return true;
    } else {
      return false;
    }
  },

  training: function(){
    return Training.findOne({ _id: this._id });
  }
});

Template.trainingShow.events({
  'click .nav--back': function(e, t){
    e.preventDefault();
    history.back();
  }
});
