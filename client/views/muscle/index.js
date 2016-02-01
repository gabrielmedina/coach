// muscle index

Template.muscle.helpers({
  muscles: function(){
    return Muscle.find({}, {sort: {name: 1}});
  },

  checkStatus: function(status){
    if(status){
      return ' list__link--active';
    } else {
      return ' list__link--inactive';
    }
  }
});

Template.muscle.events({
  'click .nav--back': function(e, t){
    e.preventDefault();
    history.back();
  }
});
