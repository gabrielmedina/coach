// routes routine exercise

Router.route('routineExerciseCreate', {
  path: '/routine-exercise/create/:_id',

  waitOn: function(){
    return Meteor.subscribe('exercises');
  },

  data: function(){
    return {
      routine_id: this.params._id
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
      title: 'Adicionar exercício - Coach',
      og: {
        'title': 'Adicionar exercício - Coach'
      }
    });
  }
});

Router.route('routineExerciseEdit', {
  path: '/routine-exercise/edit/:_id',

  waitOn: function(){
    return Meteor.subscribe('routineExercises') && Meteor.subscribe('exercises');
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

Router.route('routineExerciseShow', {
  path: '/routine-exercise/show/:_id',

  waitOn: function(){
    return Meteor.subscribe('routineExercises') && Meteor.subscribe('exercises') && Meteor.subscribe('props') && Meteor.subscribe('muscles');
  },

  data: function(){
    var obj = RoutineExercise.findOne({ _id: this.params._id });

    return {
      routineExercise: obj
    };
  },

  onAfterAction: function(){
    var obj = this.data().routineExercise;

    SEO.set({
      title: obj.exerciseObj.name + ' - Coach',
      og: {
        'title': obj.exerciseObj.name + ' - Coach'
      }
    });
  }
});
