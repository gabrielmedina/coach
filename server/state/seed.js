// server seed

Meteor.startup(function() {
  if(State.find({}).count() === 0){
    State.insert({
      uf: 'AC',
      name: 'Acre',
      status: true
    });

    State.insert({
      uf: 'AL',
      name: 'Alagoas',
      status: true
    });

    State.insert({
      uf: 'AM',
      name: 'Amazonas',
      status: true
    });

    State.insert({
      uf: 'AP',
      name: 'Amapá',
      status: true
    });

    State.insert({
      uf: 'BA',
      name: 'Bahia',
      status: true
    });

    State.insert({
      uf: 'CE',
      name: 'Ceará',
      status: true
    });

    State.insert({
      uf: 'DF',
      name: 'Distrito Federal',
      status: true
    });

    State.insert({
      uf: 'ES',
      name: 'Espírito Santo',
      status: true
    });

    State.insert({
      uf: 'GO',
      name: 'Goiás',
      status: true
    });

    State.insert({
      uf: 'MA',
      name: 'Maranhão',
      status: true
    });

    State.insert({
      uf: 'MG',
      name: 'Minas Gerais',
      status: true
    });

    State.insert({
      uf: 'MS',
      name: 'Mato Grosso do Sul',
      status: true
    });

    State.insert({
      uf: 'MT',
      name: 'Mato Grosso',
      status: true
    });

    State.insert({
      uf: 'PA',
      name: 'Pará',
      status: true
    });

    State.insert({
      uf: 'PB',
      name: 'Paraíba',
      status: true
    });

    State.insert({
      uf: 'PE',
      name: 'Pernambuco',
      status: true
    });

    State.insert({
      uf: 'PI',
      name: 'Piauí',
      status: true
    });

    State.insert({
      uf: 'PR',
      name: 'Paraná',
      status: true
    });

    State.insert({
      uf: 'RJ',
      name: 'Rio de Janeiro',
      status: true
    });

    State.insert({
      uf: 'RN',
      name: 'Rio Grande do Norte',
      status: true
    });

    State.insert({
      uf: 'RO',
      name: 'Roraima',
      status: true
    });

    State.insert({
      uf: 'RS',
      name: 'Rio Grande do Sul',
      status: true
    });

    State.insert({
      uf: 'SC',
      name: 'Santa Catarina',
      status: true
    });

    State.insert({
      uf: 'SE',
      name: 'Sergipe',
      status: true
    });

    State.insert({
      uf: 'SP',
      name: 'São Paulo',
      status: true
    });

    State.insert({
      uf: 'TO',
      name: 'Tocantins',
      status: true
    });
  }
});
