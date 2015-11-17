// routes city

Router.route('city', {
  path: '/city',

  waitOn: function(){
    return Meteor.subscribe('cities');
  },

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
  path: '/city/edit/:_id',

  waitOn: function(){
    return Meteor.subscribe('cities');
  },

  data: function(){
    return {
      _id: this.params._id
    };
  },

  onBeforeAction: function(){
    if(Meteor.user().profile.type.value != 1){
      Router.go('/');
    } else {
      this.next();
    }
  }
});
