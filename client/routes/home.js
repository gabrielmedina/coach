// routes home

Router.route('home', {
  path: '/',

  action: function(){
    this.render('home');
  }
});
