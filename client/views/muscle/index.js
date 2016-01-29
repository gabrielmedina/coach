// muscle index

Template.muscle.helpers({
  muscles: function(){
    return Muscle.find({}, {sort: {name: 1}});
  },

  checkStatus: function(status){
    if(status){
      return ' link--active';
    } else {
      return ' link--inactive';
    }
  }
});

Template.muscle.events({

});
