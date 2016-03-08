// exercise index

Template.exercise.rendered = function() {
  ExercisesSearch.search('');
};

Template.exercise.helpers({
  exercises: function(){
    return ExercisesSearch.getData();
  },

  loading: function() {
    return ExercisesSearch.getStatus().loading;
  }
});

Template.exercise.events({
  'submit .form--search': function(e, t){
    e.preventDefault();
  },

  'keyup .input--search': _.throttle(function(e, t) {
    var text = $(e.target).val().trim();
    ExercisesSearch.search(text);
  }, 200)
});
