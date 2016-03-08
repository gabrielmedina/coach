// props search

SearchSource.defineSource('props', function(searchText, options) {
  if(searchText) {
    var parts = searchText.trim().split(/[ \-\:]+/);
    var regExp = RegExp("(" + parts.join('|') + ")", "ig");

    var selector = { 'name': regExp };

    return Prop.find(selector, {limit: 10}).fetch();
  } else {
    return Prop.find(options || {}, {limit: 10}).fetch();
  }
});
