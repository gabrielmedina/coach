// accounts seed

Meteor.startup(function() {
  if(Meteor.users.find().count() === 0){
    Accounts.createUser({
      email: 'suporte@coach.com.br',
      password: 'coach',

      profile: {
        name: 'Administrador',
        type: {
          name: 'Praticante',
          value: 3
        },
        status: true
      }
    });
  }
});
