// historical publish

Meteor.publish('historicals', function(id){
  return Historical.find({ practitioner: id });
});
