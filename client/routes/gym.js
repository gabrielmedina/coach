// routes gym

Router.route('gym', {
  path: '/gym',

  waitOn: function(){
    return Meteor.subscribe('gyms') && Meteor.subscribe('cities') && Meteor.subscribe('states');
  },

  onBeforeAction: function(){
    if(Meteor.user().profile.type.value != 1){
      Router.go('/');
    } else {
      this.next();
    }
  }
});

Router.route('gymCreate', {
  path: '/gym/create',

  waitOn: function(){
    return Meteor.subscribe('cities') && Meteor.subscribe('states');
  },

  onBeforeAction: function(){
    if(Meteor.user().profile.type.value != 1){
      Router.go('/');
    } else {
      this.next();
    }
  }
});

Router.route('gymEdit', {
  path: '/gym/edit/:_id',

  waitOn: function(){
    return Meteor.subscribe('gyms') && Meteor.subscribe('cities') && Meteor.subscribe('states');
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
