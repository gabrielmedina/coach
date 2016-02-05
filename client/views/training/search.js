// training search

Template.trainingSearch.rendered = function() {
  UsersSearch.search('', { 'profile.type.value': 3 });
};

Template.trainingSearch.helpers({
  users: function(){
    return UsersSearch.getData();
  },

  loading: function() {
    return UsersSearch.getStatus().loading;
  }
});

Template.trainingSearch.events({
  'submit .form--search': function(e, t){
    e.preventDefault();
  },

  'keyup .input--search': _.throttle(function(e, t) {
    var text = $(e.target).val().trim();
    UsersSearch.search(text, { 'profile.type.value': 3 });
  }, 200)
});
