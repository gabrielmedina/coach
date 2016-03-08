// muscle index

Template.muscle.rendered = function() {
  MusclesSearch.search('');
};

Template.muscle.helpers({
  muscles: function(){
    return MusclesSearch.getData();
  },

  loading: function() {
    return MusclesSearch.getStatus().loading;
  }
});

Template.muscle.events({
  'submit .form--search': function(e, t){
    e.preventDefault();
  },

  'keyup .input--search': _.throttle(function(e, t) {
    var text = $(e.target).val().trim();
    MusclesSearch.search(text);
  }, 200)
});
