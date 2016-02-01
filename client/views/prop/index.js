// prop index

Template.prop.helpers({
  props: function(){
    return Prop.find({}, {sort: {name: 1}});
  },

  checkStatus: function(status){
    if(status){
      return ' list__link--active';
    } else {
      return ' list__link--inactive';
    }
  }
});

Template.prop.events({
  'click .nav--back': function(e, t){
    e.preventDefault();
    history.back();
  }
});
