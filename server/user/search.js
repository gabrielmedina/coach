// user search

SearchSource.defineSource('users', function(searchText, options) {
  var options = {sort: {isoScore: -1}, limit: 20};

  if(searchText) {
    var regExp = buildRegExp(searchText);
    var selector = {$and: [
      { 'profile.name': regExp },
      { 'profile.type.value': 3 }
    ]};

    return Meteor.users.find(selector, options).fetch();
  } else {
    return Meteor.users.find({'profile.type.value': 3}, options).fetch();
  }
});

function buildRegExp(searchText) {
  var parts = searchText.trim().split(/[ \-\:]+/);
  return new RegExp("(" + parts.join('|') + ")", "ig");
}
