// layout

Template.layout.helpers({

});

Template.layout.events({
  'click .btn--back': function(e, t){
    e.preventDefault();
    history.back();
  },

  'click .nav__btn--open': function(e, t){
    e.preventDefault();
    $('html').toggleClass('nav--opened');
  },

  'click .nav-action__btn--open': function(e, t){
    e.preventDefault();
    $('html').toggleClass('nav-action--opened');
  },

  'click .nav__link': function(e, t){
    $('html').toggleClass('nav--opened');
  },

  'click .nav-action__link': function(e, t){
    $('html').toggleClass('nav-action--opened');
  }
});
