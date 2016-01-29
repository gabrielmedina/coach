// exercise index

Template.exercise.helpers({
  exercises: function(){
    return Exercise.find({}, {sort: {name: 1}});
  },

  checkStatus: function(status){
    if(status){
      return ' link--active';
    } else {
      return ' link--inactive';
    }
  }
});

Template.exercise.events({

});
