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

Router.route('userEdit', {
  path: '/user/edit/:_id',

  waitOn: function(){
    return Meteor.subscribe('user', this.params._id);
  },

  data: function(){
    return {
      _id: this.params._id
    };
  }
});

Router.route('userList', {
  path: '/user/list',

  waitOn: function(){
    return Meteor.subscribe('users');
  },

  onBeforeAction: function(){
    if(Meteor.user().profile.type.value == 1){
      this.next();
    } else {
      Router.go('/training/' + Meteor.userId());
    }
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

Router.route('userRecoveryPassword', {
  path: '/recovery/:_token',

  onBeforeAction: function() {
    Session.set('resetPassword', this.params._token);
    this.next();
  },

  action: function() {
    this.render('userRecovery');
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
