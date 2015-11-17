// state publish

Meteor.publish('states', function(){
  return State.find({});
});
