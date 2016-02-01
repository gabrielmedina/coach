// routes root

Router.route('home', {
  path: '/',

  action: function() {
    Router.go('/training');
  }
});
