// exercise index

Template.exercise.helpers({
  exercises: function(){
    return Exercise.find({}, {sort: {name: 1}});
  }
});

Template.exercise.events({
  
});
