// user search

SearchSource.defineSource('users', function(searchText, options) {
  if(searchText) {
    var parts = searchText.trim().split(/[ \-\:]+/);
    var regExp = RegExp("(" + parts.join('|') + ")", "ig");

    var selector = {$and: [
      { 'profile.name': regExp },
      options || {}
    ]};

    return Meteor.users.find(selector, {limit: 10}).fetch();
  } else {
    return Meteor.users.find(options || {}, {limit: 10}).fetch();
  }
});
