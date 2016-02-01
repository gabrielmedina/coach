// prop index

Template.prop.helpers({
  props: function(){
    return Prop.find({}, {sort: {name: 1}});
  }
});

Template.prop.events({
  
});
