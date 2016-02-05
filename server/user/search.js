// user search

SearchSource.defineSource('users', function(searchText, options) {
  if(searchText) {
    var regExp = buildRegExp(searchText);

    var selector = {$and: [
      { 'profile.name': regExp },
      options || {}
    ]};

    return Meteor.users.find(selector, {limit: 10}).fetch();
  } else {
    return Meteor.users.find(options || {}, {limit: 10}).fetch();
  }
});

function buildRegExp(searchText) {
  var parts = searchText.trim().split(/[ \-\:]+/);
  return new RegExp("(" + parts.join('|') + ")", "ig");
}
