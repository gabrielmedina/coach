// routes exercise

Router.route('exercise', {
  path: '/exercise',

  waitOn: function(){
    return Meteor.subscribe('exercises') && Meteor.subscribe('props') && Meteor.subscribe('muscles');
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
      title: 'Exercícios - Coach',
      og: {
        'title': 'Exercícios - Coach'
      }
    });
  }
});

Router.route('exerciseCreate', {
  path: '/exercise/create',

  waitOn: function(){
    return Meteor.subscribe('props') && Meteor.subscribe('muscles');
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
      title: 'Adicionar exercício - Coach',
      og: {
        'title': 'Adicionar exercício - Coach'
      }
    });
  }
});

Router.route('exerciseEdit', {
  path: '/exercise/edit/:_id',

  waitOn: function(){
    return Meteor.subscribe('exercises') && Meteor.subscribe('props') && Meteor.subscribe('muscles');
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
      title: 'Alterar exercício - Coach',
      og: {
        'title': 'Alterar exercício - Coach'
      }
    });
  }
});
