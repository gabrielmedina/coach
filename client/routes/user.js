// routes home

Router.route('userLogin', {
  path: '/login'
});

Router.route('userRegister', {
  path: '/register'
});

Router.route('userRecovery', {
  path: '/recovery'
});

Router.route('userLogout', {
  path: '/logout',

  action: function(){
    if(Meteor.userId()){
      Meteor.logout();      
      this.render('home');
    }
  }
});
