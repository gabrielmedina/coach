// prop publish

Meteor.publish('muscles', function(){
  return Muscle.find({});
});
