// routine publish

Meteor.publish('routines', function(){
  return Routine.find({});
});
