// lib reason

reason = function(msg, value){
  $('.reason')
    .addClass('reason--' + value)
    .stop()
    .html(msg)
    .fadeIn(300)
    .delay(5000)
    .fadeOut(300)
    .on('click', function(){
      $(this)
        .stop()
        .fadeOut(300);
    });
}
