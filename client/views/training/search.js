// training search

Template.trainingSearch.helpers({
  users: function(){
    return Meteor.users.find({ 'profile.type.value': 3 });
  }
});

Template.trainingSearch.events({

});
