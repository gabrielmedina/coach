// prop index

Template.prop.helpers({
  props: function(){
    return Prop.find({}, {sort: {name: 1}});
  },

  checkStatus: function(status){
    if(status){
      return ' active';
    } else {
      return ' inactive';
    }
  }
});

Template.prop.events({

});
