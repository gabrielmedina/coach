// routes user

Router.route('userLogin', {
  path: '/login',

  onBeforeAction: function(){
    if(Meteor.userId()){
      Router.go('/training');
    } else {
      this.next();
    }
  }
});

Router.route('userProfile', {
  path: '/profile',

  waitOn: function(){
    return Meteor.subscribe('user', Meteor.userId());
  }
});

Router.route('userRegister', {
  path: '/register',

  onBeforeAction: function(){
    if(Meteor.userId()){
      Router.go('/training');
    } else {
      this.next();
    }
  }
});

Router.route('userRecovery', {
  path: '/recovery',

  onBeforeAction: function(){
    if(Meteor.userId()){
      Router.go('/training');
    } else {
      this.next();
    }
  }
});

Router.route('userLogout', {
  path: '/logout',

  action: function(){
    if(Meteor.userId()){
      Meteor.logout();
    }

    Router.go('/training');
  }
});
