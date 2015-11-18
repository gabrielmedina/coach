// routes state

Router.route('state', {
  path: '/state',

  waitOn: function(){
    return Meteor.subscribe('states');
  },

  onBeforeAction: function(){
    if(Meteor.user().profile.type.value != 1){
      Router.go('/');
    } else {
      this.next();
    }
  }
});

Router.route('stateCreate', {
  path: '/state/create',

  onBeforeAction: function(){
    if(Meteor.user().profile.type.value != 1){
      Router.go('/');
    } else {
      this.next();
    }
  }
});

Router.route('stateEdit', {
  path: '/state/edit/:_id',

  waitOn: function(){
    return Meteor.subscribe('states');
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
