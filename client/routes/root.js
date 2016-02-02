// routes root

Router.route('home', {
  path: '/',

  action: function() {
    Router.go('/training');
  },

  onAfterAction: function(){
    SEO.set({
      title: 'Coach - Aplicativo para quem gosta de malhar!',
      meta: {
        'description': 'Gerencie seus alunos de forma eficiênte com o aplicativo Coach.'
      },
      og: {
        'title': 'Coach - Aplicativo para quem gosta de malhar!',
        'description': 'Gerencie seus alunos de forma eficiênte com o aplicativo Coach.',
        // 'image': ''
      }
    });
  }
});
