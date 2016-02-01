// layout

Template.layout.helpers({

});

Template.layout.events({
  'click .nav-action--back': function(e, t){
    e.preventDefault();
    history.back();
  },

  'click .nav--open': function(e, t){
    e.preventDefault();
    $('.nav').toggleClass('nav--opened');
  },

  'click .nav-action--open': function(e, t){
    e.preventDefault();
    $('.nav-action').toggleClass('nav-action--opened');
  }
});
