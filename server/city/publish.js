// city publish

Meteor.publish('cities', function(){
  return City.find({});
});
