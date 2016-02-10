// prop publish

Meteor.publish('prop', function(id){
  return Prop.find({ _id: id });
});

Meteor.publish('props', function(){
  return Prop.find({});
});
