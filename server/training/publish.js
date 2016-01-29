// training publish

Meteor.publish('trainings', function(){
  return Training.find({});
});
