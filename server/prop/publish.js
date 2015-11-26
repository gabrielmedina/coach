// prop publish

Meteor.publish('props', function(){
  return Prop.find({});
});
