// exercise index

Template.exercise.helpers({
  exercises: function(){
    return Exercise.find({}, {sort: {name: 1}});
  },

  checkStatus: function(status){
    if(status){
      return ' list__link--active';
    } else {
      return ' list__link--inactive';
    }
  }
});

Template.exercise.events({
  'click .nav--back': function(e, t){
    e.preventDefault();
    history.back();
  }
});
