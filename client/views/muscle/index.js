// muscle index

Template.muscle.helpers({
  muscles: function(){
    return Muscle.find({}, {sort: {name: 1}});
  },

  checkStatus: function(status){
    if(status){
      return ' active';
    } else {
      return ' inactive';
    }
  }
});

Template.muscle.events({

});
