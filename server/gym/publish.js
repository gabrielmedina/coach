// gym publish

Meteor.publish('gyms', function(){
  return Gym.find({});
});
