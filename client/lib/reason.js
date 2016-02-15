// lib reason

reason = function(msg, value){
  $('.reason')
    .addClass('reason--active')
    .stop()
    .html(msg)
    .on('click', function(){
      $(this)
        .removeClass('reason--active')
    });

  Meteor.setTimeout(function(){
    $('.reason')
      .removeClass('reason--active')
  }, 3000);
}
