// exercises search

SearchSource.defineSource('exercises', function(searchText, options) {
  if(searchText) {
    var parts = searchText.trim().split(/[ \-\:]+/);
    var regExp = RegExp("(" + parts.join('|') + ")", "ig");

    var selector = { 'name': regExp };

    return Exercise.find(selector, {limit: 10}).fetch();
  } else {
    return Exercise.find(options || {}, {limit: 10}).fetch();
  }
});
