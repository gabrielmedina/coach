// accounts publish

Meteor.publish('user', function(id){
  return Meteor.users.find({ _id: id }, { fields: {profile: 1} });
});
