// lib reason

reason = function(msg, type){
  $('.reason')
    .addClass('reason--' + type)
    .addClass('reason--active')
    .html(msg);

  Meteor.setTimeout(function(){
    $('.reason')
      .removeClass('reason--active')
      .removeClass('reason--' + type);
  }, 3000);
}
