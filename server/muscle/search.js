// muscles search

SearchSource.defineSource('muscles', function(searchText, options) {
  if(searchText) {
    var parts = searchText.trim().split(/[ \-\:]+/);
    var regExp = RegExp("(" + parts.join('|') + ")", "ig");

    var selector = { 'name': regExp };

    return Muscle.find(selector, {limit: 10}).fetch();
  } else {
    return Muscle.find(options || {}, {limit: 10}).fetch();
  }
});
