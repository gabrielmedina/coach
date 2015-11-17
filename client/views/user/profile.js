// user profile

Template.userProfile.helpers({
  user: function(){
    var user = Meteor.users.findOne({ _id: Meteor.userId() });

    return {
      name: user.profile.name,
      type: user.profile.type.name
    };
  }
});

Template.userProfile.events({

});
