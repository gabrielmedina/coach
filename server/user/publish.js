// accounts publish

Meteor.publish('user', function(id){
  return Meteor.users.find({ _id: id }, { fields: {profile: 1} });
});

Meteor.publish('users', function(){
  return Meteor.users.find({});
});
