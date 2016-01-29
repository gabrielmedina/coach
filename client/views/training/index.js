// training index

Template.training.helpers({
  trainings: function(){
    var user = Meteor.users.findOne({ _id: Meteor.userId() });

    if(user.profile.type.value === 3){
      return Training.find({ practitioner: Meteor.userId() }, {sort: {modifiedAt: -1}});
    } else {
      return Training.find({}, {sort: {practitioner: 1}});
    }
  },

  admin: function(){
    if(Meteor.users.findOne({ _id: Meteor.userId() }).profile.type.value !== 3){
      return true;
    } else {
      return false;
    }
  },

  checkStatus: function(status){
    if(status){
      return ' link--active';
    } else {
      return ' link--inactive';
    }
  }
});

Template.training.events({

});
