// training search

var options = {
  keepHistory: 1000 * 60 * 5,
  localSearch: true
};

var fields = ['profile.name'];

UsersSearch = new SearchSource('users', fields, options);

Template.trainingSearch.rendered = function() {
  UsersSearch.search('');
};

Template.trainingSearch.helpers({
  users: function(){
    return UsersSearch.getData({
      sort: {isoScore: -1}
    });
  },

  loading: function() {
    return UsersSearch.getStatus().loading;
  }
});

Template.trainingSearch.events({
  'keyup .input--search': _.throttle(function(e) {
    var text = $(e.target).val().trim();
    UsersSearch.search(text);
  }, 200)
});
