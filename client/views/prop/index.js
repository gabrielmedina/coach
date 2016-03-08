// prop index

Template.prop.rendered = function() {
  PropsSearch.search('');
};

Template.prop.helpers({
  props: function(){
    return PropsSearch.getData();
  },

  loading: function() {
    return PropsSearch.getStatus().loading;
  }
});

Template.prop.events({
  'submit .form--search': function(e, t){
    e.preventDefault();
  },

  'keyup .input--search': _.throttle(function(e, t) {
    var text = $(e.target).val().trim();
    PropsSearch.search(text);
  }, 200)
});
