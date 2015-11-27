// exercise index

Template.exercise.helpers({
  exercises: function(){
    return Exercise.find({}, {sort: {name: 1}});
  },

  checkStatus: function(status){
    if(status){
      return ' active';
    } else {
      return ' inactive';
    }
  }
});

Template.exercise.events({

});
