// exercise publish

Meteor.publish('exercise', function(id){
  return Exercise.find({ _id: id });
});

Meteor.publish('exercises', function(){
  return Exercise.find({});
});
