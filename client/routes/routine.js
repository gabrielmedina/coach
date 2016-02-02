// routes routine

Router.route('routineCreate', {
  path: '/routine/create/:_id',

  waitOn: function(){
    return Meteor.subscribe('trainings') && Meteor.subscribe('routineExercises') && Meteor.subscribe('exercises');
  },

  data: function(){
    return {
      training_id: this.params._id
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
      title: 'Adicionar rotina - Coach',
      og: {
        'title': 'Adicionar rotina - Coach'
      }
    });
  }
});

Router.route('routineEdit', {
  path: '/routine/edit/:_id',

  waitOn: function(){
    return Meteor.subscribe('exercises') && Meteor.subscribe('routines') && Meteor.subscribe('routineExercises');
  },

  data: function(){
    return {
      _id: this.params._id
    };
  },

  onAfterAction: function(){
    SEO.set({
      title: 'Editar rotina - Coach',
      og: {
        'title': 'Editar rotina - Coach'
      }
    });
  }
});

Router.route('routineShow', {
  path: '/routine/show/:_id',

  waitOn: function(){
    return Meteor.subscribe('exercises') && Meteor.subscribe('routines') && Meteor.subscribe('routineExercises');
  },

  data: function(){
    var obj = Routine.findOne({ _id: this.params._id });

    return {
      routine: obj
    };
  },

  onAfterAction: function(){
    var obj = this.data().routine;

    SEO.set({
      title: obj.description + ' - Coach',
      og: {
        'title': obj.description + ' - Coach'
      }
    });
  }
});
