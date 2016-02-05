// user search

var options = {
  keepHistory: 1000 * 60 * 5,
  localSearch: true
};

var fields = ['profile.name'];

UsersSearch = new SearchSource('users', fields, options);
