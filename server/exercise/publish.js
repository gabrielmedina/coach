// exercise publish

Meteor.publish('exercises', function(){
  return Exercise.find({});
});
