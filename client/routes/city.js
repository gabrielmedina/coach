// routes city

Router.route('city', {
  path: '/city',

  onBeforeAction: function(){
    if(Meteor.user().profile.type.value != 1){
      Router.go('/');
    } else {
      this.next();
    }
  }
});

Router.route('cityCreate', {
  path: '/city/create',

  onBeforeAction: function(){
    if(Meteor.user().profile.type.value != 1){
      Router.go('/');
    } else {
      this.next();
    }
  }
});

Router.route('cityEdit', {
  path: '/city/edit',

  onBeforeAction: function(){
    if(Meteor.user().profile.type.value != 1){
      Router.go('/');
    } else {
      this.next();
    }
  }
});
