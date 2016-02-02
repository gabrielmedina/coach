// routes muscle

Router.route('muscle', {
  path: '/muscle',

  waitOn: function(){
    return Meteor.subscribe('muscles');
  },

  onBeforeAction: function(){
    if(Meteor.user().profile.type.value == 3){
      Router.go('/training');
    } else {
      this.next();
    }
  },

  onAfterAction: function(){
    SEO.set({
      title: 'Músculos - Coach',
      og: {
        'title': 'Músculos - Coach'
      }
    });
  }
});

Router.route('muscleCreate', {
  path: '/muscle/create',

  onBeforeAction: function(){
    if(Meteor.user().profile.type.value == 3){
      Router.go('/training');
    } else {
      this.next();
    }
  },

  onAfterAction: function(){
    SEO.set({
      title: 'Adicionar músculo - Coach',
      og: {
        'title': 'Adicionar músculo - Coach'
      }
    });
  }
});

Router.route('muscleEdit', {
  path: '/muscle/edit/:_id',

  waitOn: function(){
    return Meteor.subscribe('muscles');
  },

  data: function(){
    return {
      _id: this.params._id
    };
  },

  onBeforeAction: function(){
    if(Meteor.user().profile.type.value == 3){
      Router.go('/training');
    } else {
      this.next();
    }
  },

  onAfterAction: function(){
    SEO.set({
      title: 'Alterar músculo - Coach',
      og: {
        'title': 'Alterar músculo - Coach'
      }
    });
  }
});
