// muscle publish

Meteor.publish('muscle', function(id){
  return Muscle.find({ _id: id });
});


Meteor.publish('muscles', function(){
  return Muscle.find({});
});
