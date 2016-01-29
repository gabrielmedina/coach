// prop index

Template.prop.helpers({
  props: function(){
    return Prop.find({}, {sort: {name: 1}});
  },

  checkStatus: function(status){
    if(status){
      return ' link--active';
    } else {
      return ' link--inactive';
    }
  }
});

Template.prop.events({

});
