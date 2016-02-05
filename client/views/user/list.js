// user list

Template.userList.rendered = function() {
  UsersSearch.search('');
};

Template.userList.helpers({
  users: function(){
    return UsersSearch.getData();
  },

  loading: function() {
    return UsersSearch.getStatus().loading;
  }
});

Template.userList.events({
  'submit .form--search': function(e, t){
    e.preventDefault();
  },

  'keyup .input--search': _.throttle(function(e, t) {
    var text = $(e.target).val().trim();
    UsersSearch.search(text);
  }, 200)
});
