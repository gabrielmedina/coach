// user profile

Template.userProfile.helpers({
  user: function(){
    return Meteor.users.findOne({ _id: Meteor.userId() });
  }
});

Template.userProfile.events({

});
