// training publish

Meteor.publish('training', function(id){
  return Training.find({ _id: id });
});

Meteor.publish('trainings', function(){
  return Training.find({});
});

Meteor.publish('trainingsPractitioner', function(user_id){
  return Training.find({ practitioner: user_id });
});
