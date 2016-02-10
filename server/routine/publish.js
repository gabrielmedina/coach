// routine publish

Meteor.publish('routine', function(id){
  return Routine.find({ _id: id });
});

Meteor.publish('routines', function(){
  return Routine.find({});
});
